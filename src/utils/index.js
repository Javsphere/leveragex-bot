import { getBorrowingFee, pack } from '@gainsnetwork/sdk';
import Web3 from 'web3';
import { CHAIN_IDS, NETWORKS } from '../constants/index.js';
import { ContractsVersion } from '@gainsnetwork/sdk/lib/contracts/types/index.js';

export const transformRawTrades = (rawTrades) => rawTrades?.map((t) => transformRawTrade(t));

export const transformRawTrade = ({ trade, tradeInfo, initialAccFees, liquidationParams }) => ({
  user: trade.user,
  index: trade.index + '',
  pairIndex: trade.pairIndex + '',
  leverage: trade.leverage + '',
  long: trade.long + '' === 'true',
  isOpen: trade.isOpen + '' === 'true',
  collateralIndex: trade.collateralIndex + '',
  tradeType: trade.tradeType,
  collateralAmount: trade.collateralAmount + '',
  openPrice: trade.openPrice + '',
  tp: trade.tp + '',
  sl: trade.sl + '',
  tradeInfo: {
    createdBlock: tradeInfo.createdBlock + '',
    tpLastUpdatedBlock: tradeInfo.tpLastUpdatedBlock + '',
    slLastUpdatedBlock: tradeInfo.slLastUpdatedBlock + '',
    maxSlippageP: tradeInfo.maxSlippageP + '',
    lastOiUpdateTs: tradeInfo.lastOiUpdateTs,
    collateralPriceUsd: tradeInfo.collateralPriceUsd + '',
		contractsVersion: tradeInfo.contractsVersion + '',
		lastPosIncreaseBlock: tradeInfo.lastPosIncreaseBlock + '',
  },
  initialAccFees: {
    accPairFee: initialAccFees.accPairFee + '',
    accGroupFee: initialAccFees.accGroupFee + '',
    block: initialAccFees.block + '',
  },
	liquidationParams: {
		maxLiqSpreadP: liquidationParams.maxLiqSpreadP + '',
		startLiqThresholdP: liquidationParams.startLiqThresholdP + '',
		endLiqThresholdP: liquidationParams.endLiqThresholdP + '',
		startLeverage: liquidationParams.startLeverage + '',
		endLeverage: liquidationParams.endLeverage + '',
	},
});
export const transformOi = ({ long, short, max }) => ({
  long: parseFloat(long) / 1e10,
  short: parseFloat(short) / 1e10,
  max: parseFloat(max) / 1e10,
});

export const buildTradeIdentifier = (user, index, log = true) => {
  return `trade://${user}/${index}`;
};

export const convertTrade = (trade, precision) => {
  const { long, user } = trade;
  return {
    user,
    index: parseInt(trade.index),
    pairIndex: parseInt(trade.pairIndex),
    leverage: parseFloat(trade.leverage) / 1e3,
    long,
    isOpen: trade.isOpen + '' === 'true',
    collateralIndex: parseInt(trade.collateralIndex),
    tradeType: trade.tradeType,
    collateralAmount: parseFloat(trade.collateralAmount) / precision, // COLLATERAL PRECISION
    openPrice: parseFloat(trade.openPrice) / 1e10,
    sl: parseFloat(trade.sl) / 1e10,
    tp: parseFloat(trade.tp) / 1e10,
  };
};

export const convertTradeInfo = (tradeInfo) => {
	return {
		createdBlock: parseInt(tradeInfo.createdBlock),
		tpLastUpdatedBlock: parseInt(tradeInfo.tpLastUpdatedBlock),
		slLastUpdatedBlock: parseInt(tradeInfo.slLastUpdatedBlock),
		maxSlippageP: tradeInfo.maxSlippageP + '' === '0' ? 5 : parseFloat(tradeInfo.maxSlippageP) / 1e3,
		lastOiUpdateTs: parseFloat(tradeInfo.lastOiUpdateTs),
		collateralPriceUsd: parseFloat(tradeInfo.collateralPriceUsd) / 1e8,
		// we set manually to V9_2
		contractsVersion: parseInt('1'),
		lastPosIncreaseBlock: parseInt(tradeInfo.lastPosIncreaseBlock),
	};
};

export const convertPairFactors = (pairFactors) => ({
	protectionCloseFactor: parseFloat(pairFactors.protectionCloseFactor) / 1e10,
	cumulativeFactor: parseFloat(pairFactors.cumulativeFactor) / 1e10,
	protectionCloseFactorBlocks: parseInt(pairFactors.protectionCloseFactorBlocks),
});

export const convertFee = (fee) => ({
	totalPositionSizeFeeP: parseFloat(fee.totalPositionSizeFeeP) / 1e12,
	totalLiqCollateralFeeP: parseFloat(fee.totalLiqCollateralFeeP) / 1e12,
	minPositionSizeUsd: parseFloat(fee.minPositionSizeUsd) / 1e3,
});

export const convertTradeInitialAccFees = (initialAccFees) => ({
  accPairFee: parseFloat(initialAccFees?.accPairFee || '0') / 1e10,
  accGroupFee: parseFloat(initialAccFees?.accGroupFee || '0') / 1e10,
  block: parseInt(initialAccFees?.block || '0'),
});

export const convertLiquidationParams = (liquidationParams) => ({
	maxLiqSpreadP: parseFloat(liquidationParams?.maxLiqSpreadP || '0') / 1e12,
	startLiqThresholdP: parseFloat(liquidationParams?.startLiqThresholdP || '0') / 1e12,
	endLiqThresholdP: parseFloat(liquidationParams?.endLiqThresholdP || '0') / 1e12,
	startLeverage: parseFloat(liquidationParams?.startLeverage || '0') / 1e3,
	endLeverage: parseFloat(liquidationParams?.endLeverage || '0') / 1e3,
});

export const convertPairSpreadP = (pairSpreadP) => transformFrom1e10(pairSpreadP + '') / 100;

export const transformProtectionCloseFactor = (protectionCloseFactor) => transformFrom1e10(protectionCloseFactor + '');

export const packTrigger = (a, b, c) => {
  return pack([a, b, c].map(BigInt), [8, 160, 32].map(BigInt));
};

// OI Windows
// 1e18 USD normalized
export const convertOiWindow = (oiWindow) => ({
  oiLongUsd: parseFloat(oiWindow.oiLongUsd) / 1e18,
  oiShortUsd: parseFloat(oiWindow.oiShortUsd) / 1e18,
});

export const convertOiWindows = (oiWindows) => {
  return oiWindows.map((pairWindows) =>
    Object.fromEntries(Object.entries(pairWindows).map(([key, oiWindow]) => [key, convertOiWindow(oiWindow)]))
  );
};

export const increaseWindowOi = (oiWindows, pairIndex, windowId, long, openInterest) => {
  if (!oiWindows[pairIndex]?.[windowId]) oiWindows[pairIndex][windowId] = { oiLongUsd: 0, oiShortUsd: 0 };

  const oi = parseFloat(openInterest) / 1e18;

  if (long) {
    oiWindows[pairIndex][windowId].oiLongUsd += oi;
  } else {
    oiWindows[pairIndex][windowId].oiShortUsd += oi;
  }
};

export const transferOiWindows = (oiWindows, pairsCount, prevCurrentWindowId, prevEarliestWindowId, newCurrentWindowId) => {
  const newOiWindows = [];

  for (let i = 0; i < pairsCount; i++) {
    const oi = { oiLongUsd: 0, oiShortUsd: 0 };

    for (let id = prevEarliestWindowId; id <= prevCurrentWindowId; id++) {
      const window = oiWindows?.[i]?.[id] || { oiLongUsd: 0, oiShortUsd: 0 };
      oi.oiLongUsd += window.oiLongUsd;
      oi.oiShortUsd += window.oiShortUsd;
    }

    newOiWindows.push({ [newCurrentWindowId]: { oiLongUsd: oi.oiLongUsd, oiShortUsd: oi.oiShortUsd } });
  }

  return newOiWindows;
};

export const updateWindowsDuration = (oiWindowsSettings, windowsDuration) => {
  oiWindowsSettings.windowsDuration = parseFloat(windowsDuration);
};

export const updateWindowsCount = (oiWindowsSettings, windowsCount) => {
  oiWindowsSettings.windowsCount = parseFloat(windowsCount);
};

export const transformFrom1e10 = (value) => parseFloat(value) / 1e10;

export const appConfig = () => {
  const conf = {
    MAX_FEE_PER_GAS_WEI_HEX:
      (process.env.MAX_GAS_PRICE_GWEI ?? '').length > 0 ? Web3.utils.toHex(parseInt(process.env.MAX_GAS_PRICE_GWEI, 10) * 1e9) : 0,
    MAX_GAS_PER_TRANSACTION_HEX: Web3.utils.toHex(parseInt(process.env.MAX_GAS_PER_TRANSACTION, 10)),
    EVENT_CONFIRMATIONS_MS: parseFloat(process.env.EVENT_CONFIRMATIONS_SEC) * 1000,
    FAILED_ORDER_TRIGGER_TIMEOUT_MS: parseFloat(process.env.FAILED_ORDER_TRIGGER_TIMEOUT_SEC || '60') * 1000,
    PRIORITY_GWEI_MULTIPLIER: parseFloat(process.env.PRIORITY_GWEI_MULTIPLIER),
    MIN_PRIORITY_GWEI: parseFloat(process.env.MIN_PRIORITY_GWEI),
    COLLATERAL_PRICE_REFRESH_INTERVAL_MS: parseFloat(process.env.COLLATERAL_PRICE_REFRESH_INTERVAL_SEC || '5') * 1000,
    OPEN_TRADES_REFRESH_MS: parseFloat(process.env.OPEN_TRADES_REFRESH_SEC || '120') * 1000,
    GAS_REFRESH_INTERVAL_MS: parseFloat(process.env.GAS_REFRESH_INTERVAL_SEC || '3') * 1000,
    WEB3_STATUS_REPORT_INTERVAL_MS: parseFloat(process.env.WEB3_STATUS_REPORT_INTERVAL_SEC || '30') * 1000,
    USE_MULTICALL: (process.env.USE_MULTICALL && process.env.USE_MULTICALL === 'true') || false,
    MAX_RETRIES: process.env.MAX_RETRIES && !isNaN(+process.env.MAX_RETRIES) ? parseInt(process.env.MAX_RETRIES) : -1,
    WEB3_PROVIDER_URLS: process.env.WSS_URLS.split(','),
    CHAIN_ID: process.env.CHAIN_ID !== undefined ? parseInt(process.env.CHAIN_ID, 10) : CHAIN_IDS.SEPOLIA,
    CHAIN: process.env.CHAIN ?? 'mainnet',
    DRY_RUN_MODE: process.env.DRY_RUN_MODE === 'true',
    FETCH_TRADING_VARIABLES_REFRESH_INTERVAL_MS: parseFloat(process.env.FETCH_TRADING_VARIABLES_REFRESH_INTERVAL_SEC || '61') * 1000,
		MAX_LIQ_SPREAD_P: 5 * 1e10 + '',
	};

  const NETWORK = NETWORKS[conf.CHAIN_ID];

  return {
    ...conf,
    NETWORK,
  };
};

export function round2(num) {
	return Math.floor(num * 100) / 100;
}

export function round5(num) {
	return Math.floor(num * 100000) / 100000;
}

export function round8(num) {
	return Math.floor(num * 100000000) / 100000000;
}


export function getLiquidationPrice(
	trade,
	fee,
	initialAccFees,
	context,
) {
	const closingFee = getClosingFee(
		trade.collateralAmount,
		trade.leverage,
		trade.pairIndex,
		fee,
		context.collateralPriceUsd,
	);
	const borrowingFee = getBorrowingFee(
		trade.collateralAmount * trade.leverage,
		trade.pairIndex,
		trade.long,
		initialAccFees,
		context,
	);
	const liqThresholdP = getLiqPnlThresholdP(
		context.liquidationParams,
		trade.leverage,
	);

	let collateralThreshold = trade.collateralAmount * liqThresholdP;
	let totalFees = borrowingFee + closingFee;

	let liqPriceDistance =
		(trade.openPrice * (collateralThreshold - totalFees)) /
		trade.collateralAmount /
		trade.leverage;

	if (
		context?.contractsVersion !== undefined &&
		context.contractsVersion >= ContractsVersion.V9_2 &&
		context?.liquidationParams?.maxLiqSpreadP !== undefined &&
		context.liquidationParams.maxLiqSpreadP > 0
	) {
		const closingSpreadP = getSpreadP(
			context.pairSpreadP,
			true,
			context.liquidationParams,
		);

		liqPriceDistance -= trade.openPrice * closingSpreadP;
	}

	return trade.long
		? Math.max(trade.openPrice - liqPriceDistance, 0)
		: Math.max(trade.openPrice + liqPriceDistance, 0);
}

export function getLiqPnlThresholdP(
	liquidationParams,
	leverage,
) {
	if (
		liquidationParams === undefined ||
		leverage === undefined ||
		liquidationParams.maxLiqSpreadP === 0 ||
		liquidationParams.startLiqThresholdP === 0 ||
		liquidationParams.endLiqThresholdP === 0 ||
		liquidationParams.startLeverage === 0 ||
		liquidationParams.endLeverage === 0
	) {
		return 0.9;
	}

	if (leverage < liquidationParams.startLeverage) {
		return liquidationParams.startLiqThresholdP;
	}

	if (leverage > liquidationParams.endLeverage) {
		return liquidationParams.endLiqThresholdP;
	}

	return (
		liquidationParams.startLiqThresholdP -
		((leverage - liquidationParams.startLeverage) *
			(liquidationParams.startLiqThresholdP -
				liquidationParams.endLiqThresholdP)) /
		(liquidationParams.endLeverage - liquidationParams.startLeverage)
	);
}

function getClosingFee(
	posDai,
	leverage,
	pairIndex,
	pairFee,
	collateralPriceUsd,
	feeMultiplier,
) {
	if (
		posDai === undefined ||
		leverage === undefined ||
		pairIndex === undefined ||
		pairFee === undefined
	) {
		return 0;
	}

	const { closeFeeP, triggerOrderFeeP, minPositionSizeUsd } = pairFee;

	return (
		(closeFeeP + triggerOrderFeeP) *
		(feeMultiplier ? feeMultiplier : 1) *
		Math.max(
			collateralPriceUsd && collateralPriceUsd > 0
				? minPositionSizeUsd / collateralPriceUsd
				: 0,
			posDai * leverage,
		)
	);
}

function getSpreadP(
	pairSpreadP,
	isLiquidation,
	liquidationParams,
) {
	if (pairSpreadP === undefined || pairSpreadP === 0) {
		return 0;
	}

	const spreadP = pairSpreadP / 2;

	return isLiquidation === true &&
	liquidationParams !== undefined &&
	liquidationParams.maxLiqSpreadP > 0 &&
	spreadP > liquidationParams.maxLiqSpreadP
		? liquidationParams.maxLiqSpreadP
		: spreadP;
}

export function getPnl(
	price,
	trade,
	tradeInfo,
	initialAccFees,
	liquidationParams,
	useFees,
	context,
) {
	if (!price) {
		return;
	}
	const posCollat = trade.collateralAmount;
	const { openPrice, leverage } = trade;
	const { maxGainP, fee } = context;
	const maxGain =
		maxGainP === undefined ? Infinity : (maxGainP / 100) * posCollat;

	let pnlCollat = trade.long
		? ((price - openPrice) / openPrice) * leverage * posCollat
		: ((openPrice - price) / openPrice) * leverage * posCollat;

	pnlCollat = pnlCollat > maxGain ? maxGain : pnlCollat;

	if (useFees) {
		pnlCollat -= getBorrowingFee(
			posCollat * trade.leverage,
			trade.pairIndex,
			trade.long,
			initialAccFees,
			context,
		);
	}

	let pnlPercentage = (pnlCollat / posCollat) * 100;

	// Can be liquidated
	if (
		pnlPercentage <=
		getLiqPnlThresholdP(liquidationParams, leverage) * -100
	) {
		pnlPercentage = -100;
	} else {
		pnlCollat -= getClosingFee(
			posCollat,
			trade.leverage,
			trade.pairIndex,
			fee,
			context.collateralPriceUsd,
			context.feeMultiplier,
		);
		pnlPercentage = (pnlCollat / posCollat) * 100;
	}

	pnlPercentage = pnlPercentage < -100 ? -100 : pnlPercentage;
	pnlCollat = (posCollat * pnlPercentage) / 100;

	return [pnlCollat, pnlPercentage];
}

export * from './logger.js';
export * from './NonceManager.js';
export * from './multiCollateral.js';
