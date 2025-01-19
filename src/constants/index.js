const GROUP_IDS = {
	CRYPTO: [0],
	CRYPTO_INDEX: [1],
	FOREX: [2],
	COMMODITIES: [3],
	STOCKS: [4],
};

const CUSTOM_PAIR_IDS = {
	DMC: [367],
};

const CUSTOM_PAIR_IDS_PROD = {
	DMC: [],
};

export const isCryptoGroup = (groupId) => GROUP_IDS.CRYPTO.includes(groupId);
export const isForexGroup = (groupId) => GROUP_IDS.FOREX.includes(groupId);
export const isStocksGroup = (groupId) => GROUP_IDS.STOCKS.includes(groupId);
export const isCommoditiesGroup = (groupId) => GROUP_IDS.COMMODITIES.includes(groupId);

export const isDMCPair = (pairId, stage) => stage === 'dev' ? CUSTOM_PAIR_IDS.DMC.includes(pairId) : CUSTOM_PAIR_IDS_PROD.DMC.includes(pairId);

export const MAX_OPEN_NEGATIVE_PNL_P = 40; // 40%;
export const TRADE_TYPE = { MARKET: 0, LIMIT: 1 };

export const PENDING_ORDER_TYPE = {
  MARKET_OPEN: 0,
  MARKET_CLOSE: 1,
  LIMIT_OPEN: 2,
  STOP_OPEN: 3,
  TP_CLOSE: 4,
  SL_CLOSE: 5,
  LIQ_CLOSE: 6,
};

export function getPendingOrderTypeByValue(value) {
	return Object.keys(PENDING_ORDER_TYPE).find(key => PENDING_ORDER_TYPE[key] === value);
}

const CancelReason = {
	0: 'NONE',
	1: 'MARKET_CLOSED',
	2: 'SLIPPAGE',
	3: 'TP_REACHED',
	4: 'SL_REACHED',
	5: 'EXPOSURE_LIMITS',
	6: 'PRICE_IMPACT',
	7: 'MAX_LEVERAGE',
	8: 'NO_TRADE',
	9: 'NOT_HIT',
};

export function getCancelReasonByIndex(index) {
	return CancelReason[index];
}

export * from './abis.js';
export * from './networks.js';
