// ------------------------------------
// 1. DEPENDENCIES
// ------------------------------------

import dotenv from 'dotenv';
import ethers, { Contract } from 'ethers';
import {
	getCurrentOiWindowId,
	getLiquidationPrice,
	getPnl,
	getSpreadWithPriceImpactP,
	isCommoditiesOpen,
	isForexOpen,
	isIndicesOpen,
	isStocksOpen,
	withinMaxGroupOi,
} from '@gainsnetwork/sdk';
import Web3 from 'web3';
import { DateTime } from 'luxon';
import fetch from 'node-fetch';
import {
	GAS_MODE,
	isCommoditiesGroup,
	isForexGroup,
	isIndicesGroup,
	isStocksGroup,
	MAX_OPEN_NEGATIVE_PNL_P,
	PENDING_ORDER_TYPE,
} from './constants/index.js';
import {
	appConfig,
	buildTradeIdentifier,
	convertFee,
	convertLiquidationParams,
	convertOiWindows,
	convertPairFactors,
	convertPairSpreadP,
	convertTrade,
	convertTradeInfo,
	convertTradeInitialAccFees,
	createLogger,
	feedIdToPriceIndex,
	getEthersContract,
	increaseWindowOi,
	initContracts,
	NonceManager,
	packTrigger,
	transferOiWindows,
	transformFrom1e10,
	transformOi,
	transformRawTrade,
	transformRawTrades,
	updateWindowsCount,
	updateWindowsDuration,
} from './utils/index.js';

import { WebSocket } from 'ws';
import axios from 'axios';
import { parseEther } from 'ethers/lib/utils.js';

import * as Sentry from '@sentry/node';
import { nodeProfilingIntegration } from '@sentry/profiling-node';

const { toHex, BN } = Web3.utils;
const abiCoder = new ethers.utils.AbiCoder();

Sentry.init({
	dsn: 'https://0a61961d00d549d93c58b3c65914e720@o1353150.ingest.us.sentry.io/4507809226293248',
	integrations: [
		nodeProfilingIntegration(),
	],
	// Tracing
	tracesSampleRate: 1.0, //  Capture 100% of the transactions

	// Set sampling rate for profiling - this is relative to tracesSampleRate
	profilesSampleRate: 1.0,
});

// Make errors JSON serializable
Object.defineProperty(Error.prototype, 'toJSON', {
  value: function () {
    const tempError = {};
    const errorProperties = Object.getOwnPropertyNames(this);

    errorProperties.forEach(function (key) {
      tempError[key] = this[key];
    }, this);

    return JSON.stringify(tempError, errorProperties);
  },
  configurable: true,
  writable: true,
});

// Load base .env file first
dotenv.config();

// If there's a specific NODE_ENV set, attempt to load that environment specific .env file
if (process.env.NODE_ENV) {
  const environmentSpecificFile = `.env.${process.env.NODE_ENV}`;

  dotenv.config({
    path: environmentSpecificFile,
    override: true,
  });
}

const appLogger = createLogger('BOT', process.env.LOG_LEVEL);
let executionStats = {
  startTime: new Date(),
};

// -----------------------------------------
// 2. GLOBAL VARIABLES
// -----------------------------------------

const {
  MAX_FEE_PER_GAS_WEI_HEX,
  MAX_GAS_PER_TRANSACTION_HEX,
  EVENT_CONFIRMATIONS_MS,
  FAILED_ORDER_TRIGGER_TIMEOUT_MS,
  PRIORITY_GWEI_MULTIPLIER,
  MIN_PRIORITY_GWEI,
  OPEN_TRADES_REFRESH_MS,
  GAS_REFRESH_INTERVAL_MS,
  WEB3_STATUS_REPORT_INTERVAL_MS,
  USE_MULTICALL,
  MAX_RETRIES,
  CHAIN_ID,
  CHAIN,
  NETWORK,
  WEB3_PROVIDER_URLS,
  DRY_RUN_MODE,
  FETCH_TRADING_VARIABLES_REFRESH_INTERVAL_MS,
  COLLATERAL_PRICE_REFRESH_INTERVAL_MS,
} = appConfig();

const app = {
  // web3
  currentlySelectedWeb3ClientIndex: -1,
  currentlySelectedWeb3Client: null,
  web3Clients: [],
  // contracts
  collaterals: {},
  diamond: null,
  contracts: {
    diamond: null,
		pythOrace: null,
		javOracle: null,
  },
	signer: null,
	evmProvider: null,
  eventSub: null,
  // params
  spreadsP: [],
	pairFactors: [],
	groupLiquidationParams: [],
  borrowingFeesContext: {}, // { collateralIndex: { groups: [], pairs: [] } }
  oiWindows: {},
  oiWindowsSettings: { startTs: 0, windowsDuration: 0, windowsCount: 0 },
  blocks: {
    web3ClientBlocks: new Array(WEB3_PROVIDER_URLS.length).fill(0),
    latestL2Block: 0,
  },
  // storage/tracking
  knownOpenTrades: null,
  triggeredOrders: new Map(),
  triggerRetries: new Map(),
  allowedLink: false,
  gas: {
    priorityTransactionMaxPriorityFeePerGas: 50,
    standardTransactionGasFees: { maxFee: 31, maxPriorityFee: 31 },
    gasPriceBn: new Web3.utils.BN(0.1 * 1e9),
  },
};

appLogger.info('Welcome to the LeverageX bot!');

if (!NETWORK) {
  throw new Error(`Invalid chain id: ${CHAIN_ID}`);
}

// -----------------------------------------
//  WEB3 PROVIDER
// -----------------------------------------

async function setCurrentWeb3Client(newWeb3ClientIndex) {
  appLogger.info('Switching web3 client to ' + WEB3_PROVIDER_URLS[newWeb3ClientIndex] + ' (#' + newWeb3ClientIndex + ')...');

  const executionStartTime = performance.now();
  const newWeb3Client = app.web3Clients[newWeb3ClientIndex];

  if (!NETWORK.diamondAddress || NETWORK.diamondAddress?.length < 42) {
    throw Error('Missing `diamondAddress` network configuration.');
  }

  // update selected index here to prevent race conditions on arbitrum
  const wasFirstClientSelection = app.currentlySelectedWeb3Client === null;
  app.currentlySelectedWeb3ClientIndex = newWeb3ClientIndex;

  // setup contracts + collateral configs
  await initContracts(newWeb3Client, app, NETWORK);

  // Update the globally selected provider with this new provider
  app.currentlySelectedWeb3Client = newWeb3Client;

  // Subscribe to events using the new provider
  watchLiveTradingEvents();

	let startFetchingLatestGasPricesPromise = null;

	// If no client was previously selected, start fetching gas prices
  if (wasFirstClientSelection) {
    startFetchingLatestGasPricesPromise = startFetchingLatestGasPrices();
  }

  await Promise.all([nonceManager.initialize(), startFetchingLatestGasPricesPromise]);

  // Fire and forget refreshing of data using new provider
  fetchTradingVariables();
  fetchOpenTrades();

  appLogger.info('New web3 client selection completed. Took: ' + (performance.now() - executionStartTime) + 'ms');
}

async function fetchPythPrices(ids) {
	try {
		const response = await axios.get(
			'https://hermes.pyth.network/v2/updates/price/latest', {
				params: {
					ids,
				},
			},
		);
		return response.data;
	} catch (error) {
		appLogger.error(`error in fetchPythPrices ${error?.message}`);
	}
}

function createWeb3Provider(providerUrl) {
  const provider = new Web3.providers.WebsocketProvider(providerUrl, {
    clientConfig: {
      keepalive: true,
      keepaliveInterval: 30 * 1000,
    },
    reconnect: {
      auto: true,
      delay: 1000,
      onTimeout: true,
    },
  });

  provider.on('connect', () => {
    if (provider.connected) {
      appLogger.info(`Connected to provider ${providerUrl}`);
    }
  });

  provider.on('reconnect', () => {
    appLogger.info(`Provider ${providerUrl} is reconnecting...`);
  });

  provider.on('error', (error) => {
    appLogger.info(`Provider error: ${providerUrl}`, error);
  });

  return provider;
}

function createWeb3Client(providerIndex, providerUrl) {
  const provider = createWeb3Provider(providerUrl);
  const web3Client = new Web3(provider);
  web3Client.eth.handleRevert = true;
  web3Client.eth.defaultAccount = process.env.PUBLIC_KEY;
  web3Client.eth.defaultChain = CHAIN;

  web3Client.eth.subscribe('newBlockHeaders').on('data', async (header) => {
    const newBlockNumber = header.number;

    if (newBlockNumber === null) {
      appLogger.debug(`Received unfinished block from provider ${providerUrl}; ignoring...`);

      return;
    }

    if (newBlockNumber > app.blocks.latestL2Block) {
      app.blocks.latestL2Block = newBlockNumber;
    }

    app.blocks.web3ClientBlocks[providerIndex] = newBlockNumber;

    appLogger.debug(`New block received ${newBlockNumber} from provider ${providerUrl}...`);

    if (app.currentlySelectedWeb3ClientIndex === providerIndex) {
      return;
    }

    const blockDiff =
      app.currentlySelectedWeb3ClientIndex === -1
        ? newBlockNumber
        : newBlockNumber - app.blocks.web3ClientBlocks[app.currentlySelectedWeb3ClientIndex];

    // Check if this block is more recent than the currently selected provider's block by the max drift
    // and, if so, switch now
    if (blockDiff > MAX_PROVIDER_BLOCK_DRIFT) {
      appLogger.info(
        `Switching to provider ${providerUrl} #${providerIndex} because it is ${blockDiff} block(s) ahead of current provider (${newBlockNumber} vs ${
          app.blocks.web3ClientBlocks[app.currentlySelectedWeb3ClientIndex]
        })`
      );

      setCurrentWeb3Client(providerIndex);
    }
  });

  return web3Client;
}

const nonceManager = new NonceManager(
  process.env.PUBLIC_KEY,
  () => app.currentlySelectedWeb3Client,
  createLogger('NONCE_MANAGER', process.env.LOG_LEVEL)
);

for (let web3ProviderUrlIndex = 0; web3ProviderUrlIndex < WEB3_PROVIDER_URLS.length; web3ProviderUrlIndex++) {
  app.web3Clients.push(createWeb3Client(web3ProviderUrlIndex, WEB3_PROVIDER_URLS[web3ProviderUrlIndex]));
}

let MAX_PROVIDER_BLOCK_DRIFT =
  (process.env.MAX_PROVIDER_BLOCK_DRIFT ?? '').length > 0 ? parseInt(process.env.MAX_PROVIDER_BLOCK_DRIFT, 10) : 2;

if (MAX_PROVIDER_BLOCK_DRIFT < 1) {
  appLogger.warn(`MAX_PROVIDER_BLOCK_DRIFT is set to ${MAX_PROVIDER_BLOCK_DRIFT}; setting to minimum of 1.`);

  MAX_PROVIDER_BLOCK_DRIFT = 1;
}

setInterval(() => {
  if (app.currentlySelectedWeb3ClientIndex === -1) {
    appLogger.warn('No Web3 client has been selected yet!');
  } else {
    appLogger.info(
      `Current Web3 Client: ${app.currentlySelectedWeb3Client?.currentProvider?.url} (#${app.currentlySelectedWeb3ClientIndex})`
    );
  }

  executionStats = {
    ...executionStats,
    lastNonce: nonceManager.getLastNonce(),
    uptime: DateTime.now()
      .diff(DateTime.fromJSDate(executionStats.startTime), ['days', 'hours', 'minutes', 'seconds'])
      .toFormat("d'd'h'h'm'm's's'"),
  };

	appLogger.info(`Execution Stats: ${JSON.stringify(executionStats)}`);
}, WEB3_STATUS_REPORT_INTERVAL_MS);

setInterval(async () => {
  if (app.currentlySelectedWeb3ClientIndex === -1) {
    appLogger.warn('No Web3 client has been selected yet, will not refresh collateral prices!');
  } else {
    await Promise.all(
      Object.keys(app.collaterals).map(async (collateralIndex) => {
        const stack = app.collaterals[collateralIndex];
        const price = ((await app.contracts.diamond.methods.getCollateralPriceUsd(collateralIndex).call()) + '') / 1e8;

        if (isNaN(price)) {
          appLogger.error(`[${stack.symbol}] Collateral Price update returned invalid value`, price);
        } else {
          stack.price = price;
          appLogger.debug(`[${stack.symbol}] Price updated to ${price}, ${app.collaterals[collateralIndex].price}`);
        }
      })
    );
    appLogger.debug(`Collateral Prices updated!`);
  }
}, COLLATERAL_PRICE_REFRESH_INTERVAL_MS);
// -----------------------------------------
// FETCH DYNAMIC GAS PRICE
// -----------------------------------------

async function startFetchingLatestGasPrices() {
  // Wait for the first to complete
  await doNextLatestGasPricesFetch();

  async function doNextLatestGasPricesFetch() {
    try {
      await fetchLatestGasPrices();
    } finally {
      // No matter what, schedule the next fetch
      setTimeout(async () => {
        doNextLatestGasPricesFetch().catch((error) => {
          appLogger.error(`An error occurred attempting to fetch latest gas prices; will be tried again in ${GAS_REFRESH_INTERVAL_MS}.`, {
            error,
          });
        });
      }, GAS_REFRESH_INTERVAL_MS);
    }
  }

  async function fetchLatestGasPrices() {
    appLogger.verbose('Fetching latest gas prices...');

    if (NETWORK.gasStationUrl) {
      try {
        const response = await fetch(NETWORK.gasStationUrl);
        const gasPriceData = await response.json();

        if (NETWORK.gasMode === GAS_MODE.EIP1559) {
          app.standardTransactionGasFees = {
            maxFee: Math.round(gasPriceData.standard.maxFee),
            maxPriorityFee: Math.round(gasPriceData.standard.maxPriorityFee),
          };

          app.gas.priorityTransactionMaxPriorityFeePerGas = Math.round(
            Math.max(Math.round(gasPriceData.fast.maxPriorityFee) * PRIORITY_GWEI_MULTIPLIER, MIN_PRIORITY_GWEI)
          );
        } else {
          // TODO: Add support for legacy gas stations here
        }
      } catch (error) {
        appLogger.error('Error while fetching gas prices from gas station!', error);
      }
    } else {
      if (NETWORK.gasMode === GAS_MODE.EIP1559) {
        // TODO: Add support for EIP1159 provider fetching here
      } else if (NETWORK.gasMode === GAS_MODE.LEGACY) {
        app.gas.gasPriceBn = new BN(await app.currentlySelectedWeb3Client.eth.getGasPrice());
      }
    }
  }
}

// -----------------------------------------
// FETCH PAIRS
// -----------------------------------------

let fetchTradingVariablesTimerId = null;
let currentTradingVariablesFetchPromise = null;

async function fetchTradingVariables() {
  appLogger.info('Fetching trading variables...');

  if (fetchTradingVariablesTimerId !== null) {
    appLogger.debug(`Canceling existing fetchTradingVariables timer id.`);

    clearTimeout(fetchTradingVariablesTimerId);
    fetchTradingVariablesTimerId = null;
  }

  const executionStart = performance.now();

  const pairsCount = await app.contracts.diamond.methods.pairsCount().call();

  if (currentTradingVariablesFetchPromise !== null) {
    appLogger.warn(`A current fetchTradingVariables call was already in progress, just awaiting that...`);

    return await currentTradingVariablesFetchPromise;
  }

  try {
    currentTradingVariablesFetchPromise = Promise.all([fetchPairs(pairsCount), fetchBorrowingFees(), fetchOiWindows(pairsCount)]);

    await currentTradingVariablesFetchPromise;
    appLogger.info(`Done fetching trading variables; took ${performance.now() - executionStart}ms.`);

    if (FETCH_TRADING_VARIABLES_REFRESH_INTERVAL_MS > 0) {
      fetchTradingVariablesTimerId = setTimeout(() => {
        fetchTradingVariablesTimerId = null;
        fetchTradingVariables();
      }, FETCH_TRADING_VARIABLES_REFRESH_INTERVAL_MS);
    }
  } catch (error) {
    appLogger.error('Error while fetching trading variables!', { error });

    fetchTradingVariablesTimerId = setTimeout(() => {
      fetchTradingVariablesTimerId = null;
      fetchTradingVariables();
    }, 2 * 1000);
  } finally {
    currentTradingVariablesFetchPromise = null;
  }

  async function fetchPairs(pairsCount) {
		const [depths, pairFactors, maxLeverage, pairs, feesCount, groupsCount] = await Promise.all([
      app.contracts.diamond.methods.getPairDepths([...Array(parseInt(pairsCount)).keys()]).call(),
			app.contracts.diamond.methods.getPairFactors([...Array(parseInt(pairsCount)).keys()]).call(),
      app.contracts.diamond.methods.getAllPairsRestrictedMaxLeverage().call(),
      Promise.all(
        [...Array(parseInt(pairsCount)).keys()].map(async (_, pairIndex) => app.contracts.diamond.methods.pairs(pairIndex).call())
      ),
			app.contracts.diamond.methods.feesCount().call(),
			app.contracts.diamond.methods.groupsCount().call(),
    ]);

    app.pairMaxLeverage = new Map(maxLeverage.map((l, idx) => [idx, parseInt(l)]));
    app.pairDepths = depths.map((value) => ({
      onePercentDepthAboveUsd: parseFloat(value.onePercentDepthAboveUsd),
      onePercentDepthBelowUsd: parseFloat(value.onePercentDepthBelowUsd),
    }));

		app.pairs = pairs.map(({ from, to, spreadP, groupIndex, feeIndex, feedId }) => ({
      from,
      to,
      spreadP: spreadP,
      groupIndex: groupIndex,
      feeIndex: feeIndex,
			feedId: feedId,
    }));

    app.spreadsP = pairs.map((p) => p.spreadP);

		app.fees = (
			await Promise.all([...Array(parseInt(feesCount)).keys()].map((_, feeIndex) => app.contracts.diamond.methods.fees(feeIndex).call()))
		).map(({ openFeeP, closeFeeP, triggerOrderFeeP, minPositionSizeUsd }) => ({
			openFeeP: openFeeP,
			closeFeeP: closeFeeP,
			triggerOrderFeeP: triggerOrderFeeP,
			minPositionSizeUsd: minPositionSizeUsd,
		}));

		app.pairFactors = pairFactors.map((pairFactor) => convertPairFactors(pairFactor));

		app.groupLiquidationParams = (
			await Promise.all(
				[...Array(parseInt(groupsCount)).keys()].map((_, groupIndex) =>
					app.contracts.diamond.methods.getGroupLiquidationParams(groupIndex).call(),
				),
			)
		).map((liquidationParams) => convertLiquidationParams(liquidationParams));
  }

  async function fetchBorrowingFees() {
    await Promise.all(
      Object.keys(app.collaterals).map(async (collateralIndex) => {
        const allBorrowingPairs = await app.contracts.diamond.methods.getAllBorrowingPairs(collateralIndex).call();

        const [pairsBorrowingData, rawPairsOpenInterest, pairsBorrowingPairGroup] = [
          allBorrowingPairs[0],
          allBorrowingPairs[1],
          allBorrowingPairs[2],
        ];

        const pairsOpenInterests = rawPairsOpenInterest.map((oi) => transformOi(oi));

        const borrowingFeesGroupIds = [
          ...new Set(pairsBorrowingPairGroup.map((value) => value.map((value) => value.groupIndex)).flat()),
        ].sort((a, b) => a - b);

        const borrowingFeeGroupResults =
          borrowingFeesGroupIds.length > 0
            ? await app.contracts.diamond.methods
                .getBorrowingGroups(collateralIndex, Array.from(Array(+borrowingFeesGroupIds[borrowingFeesGroupIds.length - 1] + 1).keys()))
                .call()
            : [[], []];

        const groupsBorrowingData = borrowingFeeGroupResults[0];
        const groupsOpenInterest = borrowingFeeGroupResults[1].map((oi) => transformOi(oi));

        app.borrowingFeesContext[collateralIndex].pairs = pairsBorrowingData.map(
          ({ feePerBlock, accFeeLong, accFeeShort, accLastUpdatedBlock, feeExponent }, idx) => ({
            oi: pairsOpenInterests[idx],
            feePerBlock: transformFrom1e10(feePerBlock),
            accFeeLong: transformFrom1e10(accFeeLong),
            accFeeShort: transformFrom1e10(accFeeShort),
            accLastUpdatedBlock: parseInt(accLastUpdatedBlock),
            feeExponent: parseInt(feeExponent),
            groups: pairsBorrowingPairGroup[idx].map((group) => ({
              groupIndex: parseInt(group.groupIndex),
              block: parseInt(group.block),
              initialAccFeeLong: transformFrom1e10(group.initialAccFeeLong),
              initialAccFeeShort: transformFrom1e10(group.initialAccFeeShort),
              prevGroupAccFeeLong: transformFrom1e10(group.prevGroupAccFeeLong),
              prevGroupAccFeeShort: transformFrom1e10(group.prevGroupAccFeeShort),
              pairAccFeeLong: transformFrom1e10(group.pairAccFeeLong),
              pairAccFeeShort: transformFrom1e10(group.pairAccFeeShort),
            })),
          })
        );

        app.borrowingFeesContext[collateralIndex].groups = groupsBorrowingData.map(
          ({ feePerBlock, accFeeLong, accFeeShort, accLastUpdatedBlock, feeExponent }, idx) => ({
            oi: groupsOpenInterest[idx],
            feePerBlock: transformFrom1e10(feePerBlock),
            accFeeLong: transformFrom1e10(accFeeLong),
            accFeeShort: transformFrom1e10(accFeeShort),
            accLastUpdatedBlock: parseInt(accLastUpdatedBlock),
            feeExponent: parseInt(feeExponent),
          })
        );
      })
    );
  }
  async function fetchOiWindows(pairLength) {
    const { startTs, windowsDuration, windowsCount } = await app.contracts.diamond.methods.getOiWindowsSettings().call();

    app.oiWindowsSettings = {
      startTs: parseFloat(startTs),
      windowsDuration: parseFloat(windowsDuration),
      windowsCount: parseFloat(windowsCount),
    };

    const currWindowId = getCurrentOiWindowId(app.oiWindowsSettings);

    // Always fetch max window count
    const windowsToCheck = [...Array(5).keys()].map((i) => currWindowId - i).filter((v) => v > -1);

    const oiWindowsTemp = (
      await Promise.all(
        [...Array(parseInt(pairLength)).keys()].map((_, pairIndex) =>
          app.contracts.diamond.methods
            .getOiWindows(app.oiWindowsSettings.windowsDuration, pairIndex, windowsToCheck)
            .call()
            .then((r) => r.map((w) => ({ oiLongUsd: w.oiLongUsd, oiShortUsd: w.oiShortUsd })))
        )
      )
    ).map((pairWindows) => pairWindows.reduce((acc, curr, i) => ({ ...acc, [windowsToCheck[i]]: curr }), {}));

    app.oiWindows = convertOiWindows(oiWindowsTemp);
  }
}

// -----------------------------------------
// LOAD OPEN TRADES
// -----------------------------------------

function buildTriggerIdentifier(user, index, limitType) {
  return `trigger://${user}/${index}[lt=${limitType}]`;
}

let fetchOpenTradesRetryTimerId = null;

async function fetchOpenTrades() {
  appLogger.info('Fetching open trades...');
  try {
    if (app.spreadsP.length === 0) {
      appLogger.warn('Spreads are not yet loaded; will retry shortly!');

      scheduleRetryFetchOpenTrades();

      return;
    }

    const start = performance.now();

    const trades = await fetchOpenPairTrades();
    app.knownOpenTrades = new Map(trades.map((trade) => [buildTradeIdentifier(trade.user, trade.index), trade]));

    appLogger.info(`Fetched ${app.knownOpenTrades.size} total open trade(s) in ${performance.now() - start}ms.`);

    // Check if we're supposed to auto-refresh open trades and if so, schedule the next refresh
    if (OPEN_TRADES_REFRESH_MS !== 0) {
      appLogger.debug(`Scheduling auto-refresh of open trades in for ${OPEN_TRADES_REFRESH_MS}ms from now.`);

      setTimeout(() => fetchOpenTrades(), OPEN_TRADES_REFRESH_MS);
    } else {
      appLogger.info(
        `Auto-refresh of open trades is disabled (OPEN_TRADES_REFRESH=0); will only synchronize based on blockchain events from here out!`
      );
    }
  } catch (error) {
    appLogger.error('Error fetching open trades!', error);

    scheduleRetryFetchOpenTrades();
  }

  function scheduleRetryFetchOpenTrades() {
    if (fetchOpenTradesRetryTimerId !== null) {
      appLogger.debug('Already scheduled retry fetching open trades; will retry shortly!');

      return;
    }

    fetchOpenTradesRetryTimerId = setTimeout(() => {
      fetchOpenTradesRetryTimerId = null;
      fetchOpenTrades();
    }, 2 * 1000);
  }

  async function fetchOpenPairTrades() {
    appLogger.info('Fetching open pair trades...');

    const ethersProvider = new ethers.providers.WebSocketProvider(app.currentlySelectedWeb3Client.currentProvider.connection._url);
    const ethersMultiCollat = getEthersContract(app.contracts.diamond, ethersProvider);

    const openPairTradesRaw = await fetchOpenPairTradesRaw(
      {
        gnsMultiCollatDiamond: ethersMultiCollat,
      },
      {
        useMulticall: USE_MULTICALL,
        pairBatchSize: 10,
			},
			ethersProvider,
    );
    const allTrades = transformRawTrades(openPairTradesRaw);

    appLogger.info(`Fetched ${allTrades.length} new open pair trade(s).`);

    return allTrades;
  }
}

export async function fetchOpenPairTradesRaw(
	contracts,
	overrides,
	provider,
) {
	if (!contracts) {
		return [];
	}

	const {
		batchSize = 50,
		includeLimits = true,
		useMulticall = false,
	} = overrides;

	const { gnsMultiCollatDiamond: multiCollatDiamondContract } = contracts;

	try {
		const multicallCtx = {
			provider: provider,
			diamond: new Contract(multiCollatDiamondContract.address, [
				...multiCollatDiamondContract.interface.fragments,
			]),
		};

		if (useMulticall) {
			await multicallCtx.provider.init(multiCollatDiamondContract.provider);
		}

		let allOpenPairTrades = [];
		let running = true;
		let offset = 0;

		while (running) {
			const trades = await multiCollatDiamondContract.getAllTrades(
				offset,
				offset + batchSize,
			);
			const tradeInfos = await multiCollatDiamondContract.getAllTradeInfos(
				offset,
				offset + batchSize,
			);
			const tradeLiquidationParams =
				await multiCollatDiamondContract.getAllTradesLiquidationParams(
					offset,
					offset + batchSize,
				);
			// Array is immer von Länge `batchSize`,
			// also müssen wir die leeren Trades herausfiltern, die Indizes sind zuverlässig
			const openTrades = trades
				.filter(
					(t) =>
						t.user !== '0x0000000000000000000000000000000000000000' &&
						includeLimits || (!includeLimits && t.tradeType === 0),
				)
				.map(
					(trade, ix) => ({
						trade,
						tradeInfo: tradeInfos[ix],
						liquidationParams: tradeLiquidationParams[ix],
						initialAccFees: {
							accPairFee: 0,
							accGroupFee: 0,
							block: 0,
							__placeholder: 0,
						},
					}),
				);

			const initialAccFeesPromises = openTrades
				.map(({ trade }) => ({
					collateralIndex: trade.collateralIndex,
					user: trade.user,
					index: trade.index,
				}))
				.map(({ collateralIndex, user, index }) =>
					(useMulticall
							? multicallCtx.diamond
							: multiCollatDiamondContract
					).getBorrowingInitialAccFees(collateralIndex, user, index),
				);

			const initialAccFees =
				await (useMulticall
					? multicallCtx.provider.all(initialAccFeesPromises)
					: Promise.all(initialAccFeesPromises));

			initialAccFees.forEach((accFees, ix) => {
				openTrades[ix].initialAccFees = accFees;
			});

			allOpenPairTrades = allOpenPairTrades.concat(openTrades);
			offset += batchSize + 1;
			running =
				parseInt(trades[trades.length - 1].collateralIndex.toString()) > 0;
		}

		return allOpenPairTrades;
	} catch (error) {
		appLogger.error(`Unexpected error while fetching open pair trades!`);
		throw error;
	}
}

// -----------------------------------------
// WATCH TRADING EVENTS
// -----------------------------------------

function watchLiveTradingEvents() {
  try {
    if (app.eventSub && app.eventSub?.id) {
      app.eventSub.unsubscribe();
    }

    app.eventSub = app.contracts.diamond.events.allEvents({ fromBlock: 'latest' }).on('data', (event) => {
      if (
        [
          'PriceImpactOpenInterestAdded',
          'PriceImpactOiTransferredPairs',
          'PriceImpactWindowsDurationUpdated',
          'PriceImpactWindowsCountUpdated',
          'PairCustomMaxLeverageUpdated',
					'GroupLiquidationParamsUpdated',
					'ProtectionCloseFactorUpdated',
					'ProtectionCloseFactorBlocksUpdated',
					'CumulativeFactorUpdated',
					'OnePercentDepthUpdated',
        ].indexOf(event.event) > -1
      ) {
        //
        setTimeout(() => handleMultiCollatEvents(event), EVENT_CONFIRMATIONS_MS);
        //
      } else if (
        ['BorrowingPairAccFeesUpdated', 'BorrowingGroupAccFeesUpdated', 'BorrowingPairOiUpdated', 'BorrowingGroupOiUpdated'].indexOf(
          event.event
        ) > -1
      ) {
        //
        setTimeout(() => handleBorrowingFeesEvent(event), EVENT_CONFIRMATIONS_MS);
        //
      } else if (
        [
          'TradeStored',
          'TradeClosed',
					'LimitExecuted',
          'TradeTpUpdated',
          'TradeSlUpdated',
          'OpenLimitUpdated',
          'TradeCollateralUpdated',
          'TriggerOrderCanceled',
          'PendingOrderClosed',
					'TradePositionUpdated',
					'TradeMaxClosingSlippagePUpdated',
        ].indexOf(event.event) > -1
      ) {
        //
        setTimeout(() => synchronizeOpenTrades(event), EVENT_CONFIRMATIONS_MS);
        //
      }
    });
  } catch {
    setTimeout(() => {
      watchLiveTradingEvents();
    }, 2 * 1000);
  }
}

async function handleMultiCollatEvents(event) {
  try {
    if (event.event === 'PriceImpactOpenInterestAdded') {
      const { pairIndex, windowId, long, openInterestUsd } = event.returnValues.oiWindowUpdate;

      increaseWindowOi(app.oiWindows, pairIndex, windowId, long, openInterestUsd);

      appLogger.verbose(`Processed ${event.event}.`);
    } else if (event.event === 'PriceImpactOiTransferredPairs') {
      const { pairsCount, prevCurrentWindowId, prevEarliestWindowId, newCurrentWindowId } = event.returnValues;

      app.oiWindows = transferOiWindows(app.oiWindows, pairsCount, prevCurrentWindowId, prevEarliestWindowId, newCurrentWindowId);

      appLogger.verbose(`Processed ${event.event}.`);
    } else if (event.event === 'PriceImpactWindowsDurationUpdated') {
      const { windowsDuration } = event.returnValues;

      updateWindowsDuration(app.oiWindowsSettings, windowsDuration);

      appLogger.verbose(`Processed ${event.event}.`);
    } else if (event.event === 'PriceImpactWindowsCountUpdated') {
      const { windowsCount } = event.returnValues;

      updateWindowsCount(app.oiWindowsSettings, windowsCount);

      appLogger.verbose(`Processed ${event.event}.`);
    } else if (event.event === 'PairCustomMaxLeverageUpdated') {
      const { index, maxLeverage } = event.returnValues;

      app.pairMaxLeverage.set(index, parseFloat(maxLeverage));

      appLogger.info(`${event.event}: Set pairMaxLeverage for pair ${index} to ${maxLeverage}.`);
		} else if (event.event === 'GroupLiquidationParamsUpdated') {
			const { index, params } = event.returnValues;

			app.groupLiquidationParams[index] = convertLiquidationParams(params);

			appLogger.info(`${event.event}: Set groupLiquidationParams for group ${index}.`, app.groupLiquidationParams[index]);
		} else if (event.event === 'ProtectionCloseFactorUpdated') {
			const { pairIndex, protectionCloseFactor } = event.returnValues;

			app.pairFactors[pairIndex].protectionCloseFactor = parseFloat(protectionCloseFactor + '') / 1e10;

			appLogger.info(`${event.event}: Set protectionCloseFactor for pair ${pairIndex} to ${protectionCloseFactor + ''}`);
		} else if (event.event === 'ProtectionCloseFactorBlocksUpdated') {
			const { pairIndex, protectionCloseFactorBlocks } = event.returnValues;

			app.pairFactors[pairIndex].protectionCloseFactorBlocks = parseInt(protectionCloseFactorBlocks + '');

			appLogger.info(`${event.event}: Set protectionCloseFactorBlocks for pair ${pairIndex} to ${protectionCloseFactorBlocks + ''}`);
		} else if (event.event === 'CumulativeFactorUpdated') {
			const { pairIndex, cumulativeFactor } = event.returnValues;

			app.pairFactors[pairIndex].cumulativeFactor = parseFloat(cumulativeFactor + '') / 1e10;

			appLogger.info(`${event.event}: Set cumulativeFactor for pair ${pairIndex} to ${cumulativeFactor + ''}`);
		} else if (event.event === 'OnePercentDepthUpdated') {
			const { pairIndex, valueAboveUsd, valueBelowUsd } = event.returnValues;

			app.pairDepths[+pairIndex] = {
				onePercentDepthAboveUsd: parseFloat(valueAboveUsd),
				onePercentDepthBelowUsd: parseFloat(valueBelowUsd),
			};

			appLogger.info(`${event.event}: Set 1% depth for pair ${pairIndex} to ${valueAboveUsd} above, ${valueBelowUsd} below`);
		}
  } catch (error) {
    appLogger.error('Error occurred when handling BorrowingFees event.', error);
  }
}

async function synchronizeOpenTrades(event) {
  try {
    const currentKnownOpenTrades = app.knownOpenTrades;

    const eventName = event.event;
    const eventReturnValues = event.returnValues;

    appLogger.info(`Synchronizing open trades based on event ${eventName} from block ${event.blockNumber}...`);

    if (currentKnownOpenTrades === null) {
      appLogger.warn(
        `Known open trades not yet initialized, cannot synchronize ${eventName} from block ${event.blockNumber} at this time!`
      );

      return;
    }

    if (eventName === 'TradeStored') {
			const { trade, tradeInfo, liquidationParams } = eventReturnValues;
      const { user, index, collateralIndex } = trade;
      const initialAccFees = await app.contracts.diamond.methods.getBorrowingInitialAccFees(collateralIndex, user, index).call();

      const tradeKey = buildTradeIdentifier(user, index);
			const newTrade = transformRawTrade({ trade, tradeInfo, initialAccFees, liquidationParams });
      currentKnownOpenTrades.set(tradeKey, newTrade);
      appLogger.info(`Synchronize open trades from event ${eventName}: Stored active trade ${tradeKey}`);
    } else if (eventName === 'TradeClosed') {
      const { user, index } = eventReturnValues.tradeId;
      const tradeKey = buildTradeIdentifier(user, index);

      const existingKnownOpenTrade = currentKnownOpenTrades.get(tradeKey);

      if (existingKnownOpenTrade !== undefined) {
        currentKnownOpenTrades.delete(tradeKey);
        appLogger.info(`Synchronize open trades from event ${eventName}: Removed trade for ${tradeKey}`);
      } else {
        appLogger.info(`Synchronize open trades from event ${eventName}: Trade not found for ${tradeKey}`);
      }

		} else if (eventName === 'LimitExecuted') {

			const { user, index } = eventReturnValues.t;
			const { orderType } = eventReturnValues;
			const triggeredOrderTrackingInfoIdentifier = buildTriggerIdentifier(user, index, orderType);

			if (app.triggeredOrders.has(triggeredOrderTrackingInfoIdentifier)) {
				app.triggeredOrders.delete(triggeredOrderTrackingInfoIdentifier);
				appLogger.info(`Synchronize trigger tracking from event ${eventName}: Trigger deleted for ${triggeredOrderTrackingInfoIdentifier}`);
			} else {
				appLogger.info(`Synchronize trigger trades from event ${eventName}: Trade not found for ${triggeredOrderTrackingInfoIdentifier}`);
			}

		} else if (eventName === 'TradeTpUpdated' || eventName === 'TradeSlUpdated') {
      const { user, index } = eventReturnValues.tradeId;
      const tradeKey = buildTradeIdentifier(user, index);
      const existingKnownOpenTrade = currentKnownOpenTrades.get(tradeKey);

      if (existingKnownOpenTrade !== undefined) {
        if (eventName === 'TradeTpUpdated') {
          existingKnownOpenTrade.tp = eventReturnValues.newTp.toString();
          existingKnownOpenTrade.tradeInfo.tpLastUpdatedBlock = event.blockNumber.toString();
        } else {
          existingKnownOpenTrade.sl = eventReturnValues.newSl.toString();
          existingKnownOpenTrade.tradeInfo.slLastUpdatedBlock = event.blockNumber.toString();
        }
				appLogger.info(`Synchronize update trade from event ${eventName}: Updated values for ${tradeKey}`);
			} else {
				appLogger.error(`Synchronize update trade from event ${eventName}: Trade not found for ${tradeKey}!`);
			}
		} else if (eventName === 'TradeMaxClosingSlippagePUpdated') {
			const { user, index } = eventReturnValues.tradeId;
			const tradeKey = buildTradeIdentifier(user, index);

			const existingKnownOpenTrade = currentKnownOpenTrades.get(tradeKey);

			if (existingKnownOpenTrade !== undefined) {
				existingKnownOpenTrade.tradeInfo.maxSlippageP = eventReturnValues.maxClosingSlippageP.toString();

        appLogger.info(`Synchronize update trade from event ${eventName}: Updated values for ${tradeKey}`);
      } else {
        appLogger.error(`Synchronize update trade from event ${eventName}: Trade not found for ${tradeKey}!`);
      }
    } else if (eventName === 'OpenLimitUpdated') {
      const { trader, index, newPrice, newTp, newSl, maxSlippageP } = eventReturnValues;
      const blockNumber = event.blockNumber.toString();
      const tradeKey = buildTradeIdentifier(trader, index);

      const existingKnownOpenTrade = currentKnownOpenTrades.get(tradeKey);

      if (existingKnownOpenTrade !== undefined) {
        existingKnownOpenTrade.openPrice = newPrice.toString();
        existingKnownOpenTrade.tp = newTp.toString();
        existingKnownOpenTrade.sl = newSl.toString();
        existingKnownOpenTrade.tradeInfo.maxSlippageP = maxSlippageP.toString();
        existingKnownOpenTrade.tradeInfo.tpLastUpdatedBlock = blockNumber;
        existingKnownOpenTrade.tradeInfo.slLastUpdatedBlock = blockNumber;
        existingKnownOpenTrade.tradeInfo.createdBlock = blockNumber;

        appLogger.info(`Synchronize update trade from event ${eventName}: Updated values for ${tradeKey}`);
      } else {
        appLogger.error(`Synchronize update trade from event ${eventName}: Trade not found for ${tradeKey}!`);
      }
    } else if (eventName === 'TradeCollateralUpdated') {
      const { user, index } = eventReturnValues.tradeId;
      const tradeKey = buildTradeIdentifier(user, index);

      const existingKnownOpenTrade = currentKnownOpenTrades.get(tradeKey);

      if (existingKnownOpenTrade !== undefined) {
        existingKnownOpenTrade.collateralAmount = eventReturnValues.collateralAmount.toString();
        appLogger.info(`Synchronize update trade from event ${eventName}: Updated collateral for ${tradeKey}`);
      } else {
        appLogger.error(`Synchronize update trade from event ${eventName}: Trade not found for ${tradeKey}!`);
      }
		} else if (eventName === 'TradePositionUpdated') {
			const { user, index } = eventReturnValues.tradeId;
			const tradeKey = buildTradeIdentifier(user, index);

			const existingKnownOpenTrade = currentKnownOpenTrades.get(tradeKey);

			if (existingKnownOpenTrade !== undefined) {
				// Update trade values
				existingKnownOpenTrade.collateralAmount = eventReturnValues.collateralAmount.toString();
				existingKnownOpenTrade.leverage = eventReturnValues.leverage.toString();
				existingKnownOpenTrade.openPrice = eventReturnValues.openPrice.toString();
				existingKnownOpenTrade.tp = eventReturnValues.newTp.toString();
				existingKnownOpenTrade.sl = eventReturnValues.newSl.toString();

				// Update initial acc fees
				const { collateralIndex } = existingKnownOpenTrade;
				const initialAccFees = await app.contracts.diamond.methods.getBorrowingInitialAccFees(collateralIndex, user, index).call();
				existingKnownOpenTrade.initialAccFees = {
					accPairFee: initialAccFees.accPairFee + '',
					accGroupFee: initialAccFees.accGroupFee + '',
					block: initialAccFees.block + '',
				};

				if (eventReturnValues.isPartialIncrease) {
					const liquidationParams = await app.contracts.diamond.methods.getTradeLiquidationParams(user, index).call();
					existingKnownOpenTrade.liquidationParams = {
						maxLiqSpreadP: liquidationParams.maxLiqSpreadP + '',
						startLiqThresholdP: liquidationParams.startLiqThresholdP + '',
						endLiqThresholdP: liquidationParams.endLiqThresholdP + '',
						startLeverage: liquidationParams.startLeverage + '',
						endLeverage: liquidationParams.endLeverage + '',
					};
				}

				appLogger.info(`Synchronize update trade from event ${eventName}: Updated values for ${tradeKey}`);
			} else {
				appLogger.error(`Synchronize update trade from event ${eventName}: Trade not found for ${tradeKey}!`);
			}
		} else if (eventName === 'TriggerOrderCanceled') {
			const { triggerCaller, index, orderType, cancelReason } = eventReturnValues; // this is a pending order Id

      const triggeredOrderTrackingInfoIdentifier = buildTriggerIdentifier(triggerCaller, index, orderType);

			appLogger.warn(`Synchronize trigger tracking from event ${eventName}: Order canceled ${triggeredOrderTrackingInfoIdentifier} with reason ${cancelReason}`);

      return;
    }

    executionStats = {
      ...executionStats,
      totalEventsProcessed: (executionStats?.totalEventsProcessed ?? 0) + 1,
      lastEventBlockNumber: event.blockNumber,
      lastEventProcessed: new Date(),
    };
  } catch (error) {
    appLogger.error('Error occurred when refreshing trades.', error);
  }
}

async function handleBorrowingFeesEvent(event) {
  try {
    if (event.event === 'BorrowingPairAccFeesUpdated') {
      const { collateralIndex, pairIndex, accFeeLong, accFeeShort } = event.returnValues;
      const pairBorrowingFees = app.borrowingFeesContext[collateralIndex].pairs[pairIndex];

      if (pairBorrowingFees) {
        pairBorrowingFees.accFeeLong = parseFloat(accFeeLong) / 1e10;
        pairBorrowingFees.accFeeShort = parseFloat(accFeeShort) / 1e10;
        pairBorrowingFees.accLastUpdateBlock = parseInt(event.blockNumber);
      }
    } else if (event.event === 'BorrowingGroupAccFeesUpdated') {
      const { collateralIndex, groupIndex, accFeeLong, accFeeShort } = event.returnValues;

      const groupBorrowingFees = app.borrowingFeesContext[collateralIndex].groups[groupIndex];

      if (groupBorrowingFees) {
        groupBorrowingFees.accFeeLong = parseFloat(accFeeLong) / 1e10;
        groupBorrowingFees.accFeeShort = parseFloat(accFeeShort) / 1e10;
        groupBorrowingFees.accLastUpdateBlock = parseInt(event.blockNumber);
      }
    } else if (event.event === 'BorrowingGroupOiUpdated') {
      const { collateralIndex, groupIndex, newOiLong, newOiShort } = event.returnValues;

      const groupBorrowingFees = app.borrowingFeesContext[collateralIndex].groups[groupIndex].oi;

      if (groupBorrowingFees) {
        groupBorrowingFees.long = parseFloat(newOiLong) / 1e10;
        groupBorrowingFees.short = parseFloat(newOiShort) / 1e10;
      }
    } else if (event.event === 'BorrowingPairOiUpdated') {
      const { collateralIndex, pairIndex, newOiLong, newOiShort } = event.returnValues;

      const pairBorrowingFees = app.borrowingFeesContext[collateralIndex].pairs[pairIndex].oi;

      if (pairBorrowingFees) {
        pairBorrowingFees.long = parseFloat(newOiLong) / 1e10;
        pairBorrowingFees.short = parseFloat(newOiShort) / 1e10;
      }
    }
  } catch (error) {
    appLogger.error('Error occurred when handling BorrowingFees event.', error);
  }
}

// ---------------------------------------------
// FETCH CURRENT PRICES & TRIGGER ORDERS
// ---------------------------------------------

function watchPricingStream() {
	appLogger.info(`Connecting to pricing stream... ${process.env.PRICES_URL}`);
	const pairPrices = new Map();
	if (!NETWORK.feedIds) {
		throw Error('Missing `feedIds` network configuration.');
	}

	let socket = new WebSocket(process.env.PRICES_URL);
  let pricingUpdatesMessageProcessingCount = 0;

	socket.onopen = () => {
		appLogger.info('Pricing stream connected.');
	};
	socket.onclose = () => {
		appLogger.error('Pricing stream websocket closed! Will attempt to reconnect in two seconds...');

		setTimeout(() => {
			watchPricingStream();
		}, 2000);
	};
	socket.onerror = (error) => {
		appLogger.error('Pricing stream websocket error occurred!', { error });
		socket.close();
	};
	socket.onmessage = (msg) => {
    const currentKnownOpenTrades = app.knownOpenTrades;

    if (currentKnownOpenTrades === null) {
      appLogger.debug('Known open trades not yet loaded; unable to begin any processing yet!');

      return;
    }

    if (app.spreadsP.length === 0) {
      appLogger.debug('Spreads are not yet loaded; unable to process any trades!');

      return;
    }

		const messageData = JSON.parse(msg.data.toString());

		const correctId = messageData.id;
		if (feedIdToPriceIndex.get(correctId) !== undefined) {

			// stocks pricefeed
			if (messageData.priceCombined !== undefined) {
				pairPrices.set(feedIdToPriceIndex.get(correctId), +messageData.priceCombined.price * 10 ** messageData.priceCombined.expo);
				// everything else directly from pyth
			} else {
				pairPrices.set(feedIdToPriceIndex.get(correctId), +messageData.price.price * 10 ** messageData.price.expo);
			}
		}

    pricingUpdatesMessageProcessingCount++;

    handleOnMessageAsync()
      .catch((error) => {
        appLogger.error('Unhandled error occurred when handling pricing stream message!', { error });
      })
      .finally(() => {
        pricingUpdatesMessageProcessingCount--;
      });

    async function handleOnMessageAsync() {
      // appLogger.debug(`Beginning processing new "pricingUpdated" message}...`);
      // appLogger.debug(`Received "charts" message, checking if any of the ${currentKnownOpenTrades.size} known open trades should be acted upon...`, { knownOpenTradesCount: currentKnownOpenTrades.size });

      await Promise.allSettled(
        [...currentKnownOpenTrades.values()].map(async (openTrade) => {
          const { user, pairIndex, index, long, collateralIndex } = openTrade;

          const collateralConfig = app.collaterals[collateralIndex];
          if (collateralConfig === undefined) {
            appLogger.error('Unknown collateral config, this should not be happening!');
            return;
          }

          const price = pairPrices.get(parseInt(pairIndex));
          if (price === undefined) return;

          const isPendingOpenLimitOrder = openTrade.tradeType + '' !== '0';
          const openTradeKey = buildTradeIdentifier(user, index);
          // Under certain conditions (forex/stock market just opened, server restart, etc) the price is not
          // available, so we need to make sure we skip any processing in that case
          if ((price ?? 0) <= 0) {
            appLogger.debug(`Received ${price} for close price for pair ${pairIndex}; skipping processing of ${openTradeKey}!`);

            return;
          }

					const groupId = parseInt(app.pairs[pairIndex].groupIndex);

					let orderType = -1;

					////////// Prep converted objects //////////
					const convertedTrade = convertTrade(openTrade, collateralConfig.precision);
					const convertedTradeInfo = convertTradeInfo(openTrade.tradeInfo);
					const convertedInitialAccFees = convertTradeInitialAccFees(openTrade.initialAccFees);
					const convertedLiquidationParams = convertLiquidationParams(openTrade.liquidationParams);
					const convertedFee = convertFee(app.fees[parseInt(app.pairs[pairIndex].feeIndex)]);
					const convertedPairSpreadP = convertPairSpreadP(app.spreadsP[pairIndex]);
					const borrowingFeesContext = app.borrowingFeesContext[collateralIndex];
					////////////////////////////////////////////

					if (isPendingOpenLimitOrder === false) {
						// Hotfix openPrice of 0
						if (parseInt(openTrade.openPrice) === 0) return;

						const spreadCtx = {
							isOpen: false,
							isPnlPositive: false,
							createdBlock: +openTrade.tradeInfo.createdBlock,
							...app.pairFactors[pairIndex],
							liquidationParams: convertLiquidationParams(openTrade.liquidationParams),
							contractsVersion: +openTrade.tradeInfo.contractsVersion,
							currentBlock: app.blocks.latestL2Block,
						};

						const calculateSpreadWithPriceImpactP = (spreadCtxToUse) => {
							return getSpreadWithPriceImpactP(
								convertedPairSpreadP,
								openTrade.long,
								convertedTrade.collateralAmount * collateralConfig.price,
								convertedTrade.leverage,
								app.pairDepths[openTrade.pairIndex],
								app.oiWindowsSettings,
								app.oiWindows[openTrade.pairIndex],
								spreadCtxToUse,
							);
						};

						// Fetch spread + price impact with no protection factor
						const spreadWithPriceImpactPnoProtection = calculateSpreadWithPriceImpactP(spreadCtx);

						const [, pnlPercentage] = getPnl(
							!long ? price * (1 + spreadWithPriceImpactPnoProtection) : price * (1 - spreadWithPriceImpactPnoProtection),
							convertedTrade,
							convertedTradeInfo,
							convertedInitialAccFees,
							convertedLiquidationParams,
							true,
							{
								maxGainP: 900,
								fee: convertedFee,
								currentBlock: app.blocks.latestL2Block,
								openInterest: borrowingFeesContext.pairs[convertedTrade.pairIndex].oi,
								pairs: borrowingFeesContext.pairs,
								groups: borrowingFeesContext.groups,
								collateralPriceUsd: app.collaterals[convertedTrade.collateralIndex].price,
								contractsVersion: convertedTradeInfo.contractsVersion,
								feeMultiplier: 1,
							},
						);

						const spreadWithPriceImpactP = calculateSpreadWithPriceImpactP({
							...spreadCtx,
							isPnlPositive: pnlPercentage > 0,
						});

						const tp = convertedTrade.tp;
						const sl = convertedTrade.sl;

						// inverse direction (!long) because it's a close trade op
						const priceAfterImpact = !long ? price * (1 + spreadWithPriceImpactP) : price * (1 - spreadWithPriceImpactP);

						const tpDistanceP = tp !== 0 ? (Math.abs(tp - priceAfterImpact) / tp) * 100 : 0;
						const slDistanceP = sl !== 0 ? (Math.abs(sl - priceAfterImpact) / sl) * 100 : 0;

						const liqPrice = getTradeLiquidationPrice(
							convertedTrade,
							convertedTradeInfo,
							convertedInitialAccFees,
							convertedLiquidationParams,
							convertedFee,
							convertedPairSpreadP,
							borrowingFeesContext,
						);

						if (
							tp !== 0 &&
							tpDistanceP <= convertedTradeInfo.maxSlippageP && // abs distance from current price and tp can't be above max slippage
							((long && price >= tp) || (!long && price <= tp))
						) {
							orderType = PENDING_ORDER_TYPE.TP_CLOSE;
						} else if (
							sl !== 0 &&
							slDistanceP <= convertedTradeInfo.maxSlippageP && // abs distance from current price and sl can't be above max slippage
							((long && price <= sl) || (!long && price >= sl))
						) {
							orderType = PENDING_ORDER_TYPE.SL_CLOSE;
						} else if ((long && price <= liqPrice) || (!long && price >= liqPrice)) {
							orderType = PENDING_ORDER_TYPE.LIQ_CLOSE;
						} else {
							//appLogger.debug(`Open trade ${openTradeKey} is not ready for us to act on yet.`);
						}
					} else {
						const posDai = convertedTrade.leverage * convertedTrade.collateralAmount;

						const spreadWithPriceImpactP =
							getSpreadWithPriceImpactP(
								convertedPairSpreadP,
								openTrade.long,
								convertedTrade.collateralAmount * collateralConfig.price,
								convertedTrade.leverage,
								app.pairDepths[openTrade.pairIndex],
								app.oiWindowsSettings,
								app.oiWindows[openTrade.pairIndex],
							) * 100;

						// oi.long/short/max are already transformed (div 1e10)
						const maxInterestDai = app.borrowingFeesContext[collateralIndex].pairs[openTrade.pairIndex].oi.max;
						const interestDai = long
							? app.borrowingFeesContext[collateralIndex].pairs[openTrade.pairIndex].oi.long
							: app.borrowingFeesContext[collateralIndex].pairs[openTrade.pairIndex].oi.short;

						const newInterestDai = interestDai + posDai;
						const wantedPrice = convertedTrade.openPrice;
						const wantedPriceAfterImpact = long ? wantedPrice * (1 + spreadWithPriceImpactP) : wantedPrice * (1 - spreadWithPriceImpactP);

						const openPriceDistanceP = (Math.abs(wantedPrice - price) / wantedPrice) * 100;

						if (
							isValidLeverage(openTrade.pairIndex, convertedTrade.leverage) &&
							newInterestDai <= maxInterestDai &&
							spreadWithPriceImpactP * convertedTrade.leverage <= MAX_OPEN_NEGATIVE_PNL_P &&
							withinMaxGroupOi(openTrade.pairIndex, long, posDai, app.borrowingFeesContext[collateralIndex]) &&
							spreadWithPriceImpactP <= convertedTradeInfo.maxSlippageP &&
							// Ensure that current price isn't too far from open price
							openPriceDistanceP <= convertedTradeInfo.maxSlippageP &&
							// Ensure TP isn't hit with wanted price + spread/PI
							(convertedTrade.tp === 0 ||
								(convertedTrade.tp > 0 && (long ? wantedPriceAfterImpact < convertedTrade.tp : wantedPriceAfterImpact > convertedTrade.tp)))
						) {
							const tradeType = openTrade.tradeType + '';
							if (
								(tradeType === '1' && (long ? price <= wantedPrice : price >= wantedPrice)) ||
								(tradeType === '2' && (long ? price >= wantedPrice : price <= wantedPrice))
							) {
								orderType = tradeType === '1' ? PENDING_ORDER_TYPE.LIMIT_OPEN : PENDING_ORDER_TYPE.STOP_OPEN;
							} else {
								//appLogger.debug(`Limit trade ${openTradeKey} is not ready for us to act on yet.`);
							}
						}
					}

					// If it's not an order type we want to act on yet, just skip it
					if (orderType === -1) {
						return;
					}

          if (isForexGroup(groupId) && !isForexOpen(new Date())) {
            return;
          }

          if (isStocksGroup(groupId) && !isStocksOpen(new Date())) {
            return;
          }

          if (isIndicesGroup(groupId) && !isIndicesOpen(new Date())) {
            return;
          }

          if (isCommoditiesGroup(groupId) && !isCommoditiesOpen(new Date())) {
            return;
          }

          const triggeredOrderTrackingInfoIdentifier = buildTriggerIdentifier(user, index, orderType);

          // Make sure this order hasn't already been triggered
          if (app.triggeredOrders.has(triggeredOrderTrackingInfoIdentifier)) {
            appLogger.debug(`Order ${triggeredOrderTrackingInfoIdentifier} has already been triggered by us and is pending!`);

            return;
          }

          if (!canRetry(triggeredOrderTrackingInfoIdentifier)) return;

          const triggeredOrderDetails = {
            cleanupTimerId: null,
            transactionSent: false,
            error: null,
          };

          // Track that we're triggering this order any other price updates that come in will not try to process
          // it at the same time
          app.triggeredOrders.set(triggeredOrderTrackingInfoIdentifier, triggeredOrderDetails);

          try {
            // Make sure the trade is still known to us at this point because it's possible that the trade was
            // removed from known open trades asynchronously which is why we check again here even though we're
            // looping through the set of what we thought were the known open trades here
            if (!currentKnownOpenTrades.has(openTradeKey)) {
							appLogger.warn(`Trade ${openTradeKey} no longer exists in our known open trades listps -e|grep node; skipping order!`);

              return;
            }

            appLogger.info(`🤞 Trying to trigger ${triggeredOrderTrackingInfoIdentifier}...`);

            try {
							// before we execute limit or liquidation we get the actual prices from oracle
							// and give them in the trigger order function so directly before trigger price is live
							const actualPrice = await getActualPrice(openTrade.pairIndex, openTrade.collateralIndex, messageData);
              const orderTransaction = createTransaction(
                {
                  to: app.contracts.diamond.options.address,
									data: app.contracts.diamond.methods.triggerOrder(packTrigger(orderType, user, index), actualPrice).encodeABI(),
                },
                true
              );

              // NOTE: technically this should execute synchronously because we're supplying all necessary details on
              // the transaction object up front
              const signedTransaction = await app.currentlySelectedWeb3Client.eth.accounts.signTransaction(
                orderTransaction,
                process.env.PRIVATE_KEY
              );
							let tx;
							if (DRY_RUN_MODE === false) {
								tx = await app.currentlySelectedWeb3Client.eth.sendSignedTransaction(signedTransaction.rawTransaction);
              } else {
                appLogger.info(
                  `DRY RUN MODE ACTIVE: skipping actually sending transaction for order: ${triggeredOrderTrackingInfoIdentifier}`,
                  orderTransaction
                );
              }

              triggeredOrderDetails.transactionSent = true;

              // If we successfully send the transaction, we set up a timer to make sure we've heard about its
              // eventual completion and, if not, we clean up tracking and log that we didn't hear back
              triggeredOrderDetails.cleanupTimerId = setTimeout(() => {
                if (app.triggeredOrders.delete(triggeredOrderTrackingInfoIdentifier)) {
                  appLogger.warn(
                    `❕ Never heard back from the blockchain about triggered order ${triggeredOrderTrackingInfoIdentifier}; removed from tracking.`
                  );

                  executionStats = {
                    ...executionStats,
                    missedTriggers: (executionStats.missedTriggers ?? 0) + 1,
                  };
                }
              }, FAILED_ORDER_TRIGGER_TIMEOUT_MS);

							appLogger.info(`⚡️ Triggered order for ${triggeredOrderTrackingInfoIdentifier} with tx ${tx.transactionHash}.`);
            } catch (error) {
              const executionStatsTriggerErrors = executionStats.triggerErrors ?? {};
              const errorReason = error.reason ?? 'UNKNOWN_TRANSACTION_ERROR';

              executionStatsTriggerErrors[errorReason] = (executionStatsTriggerErrors[errorReason] ?? 0) + 1;

              executionStats = {
                ...executionStats,
                triggerErrors: executionStatsTriggerErrors,
              };

              switch (errorReason) {
                case 'PendingTrigger()':
                  // The trade has been triggered by others, delay removing it and maybe we'll have a
                  // chance to try again if original trigger fails
                  appLogger.warn(
                    `Order ${triggeredOrderTrackingInfoIdentifier} was already triggered; will remove from triggered tracking shortly and it may be tried again if original trigger didn't hit!`
                  );

                  // Wait a bit and then clean from triggered orders list so it might get tried again
                  triggeredOrderDetails.cleanupTimerId = setTimeout(() => {
                    if (!app.triggeredOrders.delete(triggeredOrderTrackingInfoIdentifier)) {
                      appLogger.debug(
                        `Tried to clean up triggered order ${triggeredOrderTrackingInfoIdentifier} which previously failed due to "${errorReason}", but it was already removed.`
                      );
                    }
                  }, FAILED_ORDER_TRIGGER_TIMEOUT_MS / 2);

                  break;

                case 'NoTrade()':
                  appLogger.warn(
                    `❌ Order ${triggeredOrderTrackingInfoIdentifier} missed due to "${errorReason}" error; removing order from known trades and triggered tracking.`
                  );

                  // The trade is gone, just remove it from known trades
                  app.triggeredOrders.delete(triggeredOrderTrackingInfoIdentifier);
                  currentKnownOpenTrades.delete(openTradeKey);

                  break;

                case 'PriceImpactTooHigh()':
                case 'WrongOrderType()':
                case 'NoSL()':
                case 'NoTP()':
                  appLogger.warn(
                    `❗️ Order ${triggeredOrderTrackingInfoIdentifier} missed due to "${errorReason}" error; will remove order from triggered tracking.`
                  );

                  // Wait a bit and then clean from triggered orders list so it might get tried again
                  triggeredOrderDetails.cleanupTimerId = setTimeout(() => {
                    if (!app.triggeredOrders.delete(triggeredOrderTrackingInfoIdentifier)) {
                      appLogger.warn(
                        `Tried to clean up triggered order ${triggeredOrderTrackingInfoIdentifier} which previously failed due to "${errorReason}", but it was already removed.`
                      );
                    }
                  }, FAILED_ORDER_TRIGGER_TIMEOUT_MS);

                  break;

                default:
                  const errorMessage = error.message?.toLowerCase();

                  if (
                    errorMessage !== undefined &&
                    (errorMessage.includes('nonce too low') || errorMessage.includes('replacement transaction underpriced'))
                  ) {
                    appLogger.error(
                      `⁉️ Some how we ended up with a nonce that was too low; forcing a refresh now and the trade may be tried again if still available.`
                    );

                    await nonceManager.refreshNonceFromOnChainTransactionCount();
                    app.triggeredOrders.delete(triggeredOrderTrackingInfoIdentifier);

                    appLogger.info('Nonce refreshed and tracking of triggered order cleared so it can possibly be retried.');
                  } else {
                    appLogger.error(
                      `🔥 Order ${triggeredOrderTrackingInfoIdentifier} transaction failed for unexpected reason "${errorReason}"; removing order from tracking.`,
                      { error }
                    );

                    // Wait a bit and then clean from triggered orders list so it might get tried again
                    triggeredOrderDetails.cleanupTimerId = setTimeout(() => {
                      if (!app.triggeredOrders.delete(triggeredOrderTrackingInfoIdentifier)) {
                        appLogger.debug(
                          `Tried to clean up triggered order ${triggeredOrderTrackingInfoIdentifier} which previously failed, but it was already removed?`
                        );
                      }
                    }, FAILED_ORDER_TRIGGER_TIMEOUT_MS);
                  }
              }
            }
          } catch (error) {
            appLogger.error(
              `Failed while trying to trigger order ${triggeredOrderTrackingInfoIdentifier}; removing from triggered tracking so it can be tried again ASAP.`
            );

            app.triggeredOrders.delete(triggeredOrderTrackingInfoIdentifier);

            throw error;
          }
        })
      );
    }
	};

	async function getActualPrice(priceId, colId, messageData) {

		try {

			appLogger.info(`Reading from Pyth price feed ...`);

			const groupId = parseInt(app.pairs[priceId].groupIndex);
			if (!isStocksGroup(groupId)) {
				appLogger.info(`Get Price for Pyth Oracle for priceId ${priceId}`);
				const [priceUpdatesPyth] = await Promise.all([
					fetchPythPrices([app.pairs[priceId].feedId, app.pairs[colId].feedId, NETWORK.rewardTokenId]),
				]);
				return [['0x' + priceUpdatesPyth.binary.data[0]], []];
			} else {
				appLogger.info(`Get Price for Jav Oracle for priceId ${priceId}`);
				const [priceUpdatesJav] = await Promise.all([
					fetchPythPrices([app.pairs[colId].feedId, NETWORK.rewardTokenId]),
				]);
				const updatePriceInfo = abiCoder.encode(
					['bytes32', 'int64', 'uint64', 'int32', 'uint64'],
					[`0x${messageData.id}`, +messageData.priceCombined.price, messageData.priceCombined.conf, messageData.priceCombined.expo, messageData.priceCombined.publishTime],
				);
				const messageHash = ethers.utils.keccak256(updatePriceInfo);
				const signature = await app.signer.signMessage(ethers.utils.arrayify(messageHash));
				const signedData = ethers.utils.concat([signature, updatePriceInfo]);
				return [['0x' + priceUpdatesJav.binary.data[0]], [signedData]];
			}

		} catch (err) {
			appLogger.error(`error ${err?.message} in getActualPrice`);

		}
	}

	function getTradeLiquidationPrice(
		convertedTrade,
		convertedTradeInfo,
		convertedInitialAccFees,
		convertedLiquidationParams,
		convertedFee,
		convertedPairSpreadP,
		borrowingFeesContext,
	) {
		return getLiquidationPrice(convertedTrade, convertedFee, convertedInitialAccFees, {
			currentBlock: app.blocks.latestL2Block,
			pairs: borrowingFeesContext.pairs,
			groups: borrowingFeesContext.groups,
			liquidationParams: convertedLiquidationParams,
			pairSpreadP: convertedPairSpreadP,
			collateralPriceUsd: app.collaterals[convertedTrade.collateralIndex].price,
			contractsVersion: convertedTradeInfo.contractsVersion,
		});
	}

  function isValidLeverage(pairIndex, wantedLeverage) {
    const maxLev = app.pairMaxLeverage.get(pairIndex) ?? 0;
    // if pairsMaxLeverage is 0 then it's not currently being restricted
    return maxLev === 0 || maxLev >= wantedLeverage;
  }

  function canRetry(triggerId) {
    if (MAX_RETRIES === -1) return true;

    const retries = app.triggerRetries.get(triggerId) || 0;
    const canRetry = retries < MAX_RETRIES;

    if (canRetry) {
      // to prevent incrementing at every price message. Only
      app.triggerRetries.set(triggerId, retries + 1);
    }

    return canRetry;
  }
}

watchPricingStream();

/**
 * Creates a base transaction object using fixed, configured values and optionally fills out any additionally
 * supplied properties.
 * @param {Object} additionalTransactionProps - Any additional properties that should be applied to (or overridden on)
 * the base transaction object.
 * @param {boolean} isPriority - Whether or not the transaction is a priority transaction; defaults to false. (NOTE:
 * ultimately controls the gas price used.
 */
function createTransaction(additionalTransactionProps, isPriority = false) {
  return {
    chainId: CHAIN_ID,
    nonce: nonceManager.getNextNonce(),
    gas: MAX_GAS_PER_TRANSACTION_HEX,
    ...getTransactionGasFees(NETWORK, isPriority),
    ...additionalTransactionProps,
		value: parseEther('0.0000000000000001'),
  };
}

/**
 * Gets the appropriate gas fee settings to apply to a transaction based on the network type.
 * @param {NETWORK} network - The network instance that gas fees are to be retrieved for.
 * @param {boolean} isPriority - Whether or not the transaction is a priority transaction; defaults to false. (NOTE:
 * this controls the amount of gas used for the transaction.)
 * @returns The appropriate gas fee settings for the transaction based on the network type.
 */
function getTransactionGasFees(network, isPriority = false) {
  if (NETWORK.gasMode === GAS_MODE.EIP1559) {
    return {
      maxPriorityFeePerGas: isPriority
        ? toHex(app.gas.priorityTransactionMaxPriorityFeePerGas * 1e9)
        : toHex(app.gas.standardTransactionGasFees.maxPriorityFee * 1e9),
      maxFeePerGas: isPriority ? MAX_FEE_PER_GAS_WEI_HEX : toHex(app.gas.standardTransactionGasFees.maxFee * 1e9),
    };
  } else if (NETWORK.gasMode === GAS_MODE.LEGACY) {
    return {
      gasPrice: toHex(app.gas.gasPriceBn.mul(BN(500)).div(BN(100))),
    };
  }

  throw new Error(`Unsupported gas mode: ${NETWORK?.gasMode}`);
}
