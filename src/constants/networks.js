export const GAS_MODE = {
  EIP1559: 'eip1559',
  LEGACY: 'legacy',
};

export const CHAIN_IDS = {
  SEPOLIA: 84532,
	BASE: 8453,
};

export const COLLATERAL = {
	tWBTC: 'tWBTC',
	tWETH: 'tWETH',
	tUSDT: "tUSDT",
  tUSDC: 'tUSDC',
	xWBTC: 'xWBTC',
	xWETH: 'xWETH',
	xUSDC: 'xUSDC',
	dcbBTC: 'dcbBTC',
	dUSDC: 'dUSDC',
	WETH: 'WETH',
	cbBTC: 'cbBTC',
	USDC: 'USDC',
};

export const COLLATERAL_CONFIG = {
	[COLLATERAL.tWBTC]: {
    decimals: 18,
    precision: 1e18,
    precisionDelta: 1,
  },
	[COLLATERAL.tWETH]: {
    decimals: 18,
    precision: 1e18,
    precisionDelta: 1,
  },
	[COLLATERAL.tUSDT]: {
		decimals: 18,
		precision: 1e18,
		precisionDelta: 1,
  },
	[COLLATERAL.tUSDC]: {
		decimals: 18,
		precision: 1e18,
		precisionDelta: 1,
	},
	[COLLATERAL.xWBTC]: {
		decimals: 18,
		precision: 1e18,
		precisionDelta: 1,
	},
	[COLLATERAL.xWETH]: {
		decimals: 18,
		precision: 1e18,
		precisionDelta: 1,
	},
	[COLLATERAL.xUSDC]: {
		decimals: 18,
		precision: 1e18,
		precisionDelta: 1,
	},
	[COLLATERAL.dcbBTC]: {
		decimals: 8,
		precision: 1e8,
		precisionDelta: 1,
	},
	[COLLATERAL.dUSDC]: {
		decimals: 6,
		precision: 1e6,
		precisionDelta: 1,
	},
	[COLLATERAL.WETH]: {
		decimals: 18,
		precision: 1e18,
		precisionDelta: 1,
	},
	[COLLATERAL.cbBTC]: {
		decimals: 8,
		precision: 1e8,
		precisionDelta: 1,
	},
	[COLLATERAL.USDC]: {
		decimals: 6,
		precision: 1e6,
		precisionDelta: 1,
	},
};

export const NETWORKS = {
  [CHAIN_IDS.SEPOLIA]: {
    chainName: 'base sepolia',
    chainId: CHAIN_IDS.SEPOLIA,
		gasMode: GAS_MODE.EIP1559,
    gasStationUrl: undefined,
		diamondAddress: '0xDED8c59c45D8e0f45D8C32f6F6E0A4a2d582e59d',
		maxPnl: 400,
    collaterals: [
      {
				symbol: COLLATERAL.tWETH,
        collateralIndex: 0,
      },
      {
				symbol: COLLATERAL.tWBTC,
        collateralIndex: 1,
      },
      {
        symbol: COLLATERAL.tUSDC,
				collateralIndex: 2,
			},
    ],
		rewardTokenId: '0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b',
	},
	[CHAIN_IDS.BASE]: {
		chainName: 'base',
		chainId: CHAIN_IDS.BASE,
		gasMode: GAS_MODE.EIP1559,
		gasStationUrl: undefined,
		diamondAddress: '0xDEFf0d5bAAb58985aC3b2E61B82108Cc1900aF8a',
		maxPnl: 400,
		collaterals: [
			{
				symbol: COLLATERAL.WETH,
				collateralIndex: 0,
			},
			{
				symbol: COLLATERAL.cbBTC,
				collateralIndex: 1,
			},
			{
				symbol: COLLATERAL.USDC,
				collateralIndex: 2,
			},
		],
		rewardTokenId: '0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a',
	},
};
