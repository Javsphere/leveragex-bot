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
		maxPnl: 900,
    collaterals: [
      {
				symbol: COLLATERAL.tWETH,
        collateralIndex: 0,
				collateralFeed: '0x9d4294bbcd1174d6f2003ec365831e64cc31d9f6f15a2b85399db8d5000960f6',
      },
      {
				symbol: COLLATERAL.tWBTC,
        collateralIndex: 1,
				collateralFeed: '0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43',
      },
      {
        symbol: COLLATERAL.tUSDC,
				collateralIndex: 2,
				collateralFeed: '0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a',
			},
    ],
		rewardTokenId: '0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b',
	},
	[CHAIN_IDS.BASE]: {
		chainName: 'base',
		chainId: CHAIN_IDS.BASE,
		gasMode: GAS_MODE.EIP1559,
		gasStationUrl: undefined,
		diamondAddress: '0xBF35e4273db5692777EA475728fDbBa092FFa1B3',
		maxPnl: 400,
		collaterals: [
			{
				symbol: COLLATERAL.WETH,
				collateralIndex: 0,
				collateralFeed: '0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace',
			},
			{
				symbol: COLLATERAL.cbBTC,
				collateralIndex: 1,
				collateralFeed: '0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43',
			},
			{
				symbol: COLLATERAL.USDC,
				collateralIndex: 2,
				collateralFeed: '0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a',
			},
		],
		rewardTokenId: '0xeaa020c61cc479712813461ce153894a96a6c00b21ed0cfc2798d1f9a9e9c94a',
	},
};
