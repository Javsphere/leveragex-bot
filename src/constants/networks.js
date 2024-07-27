export const GAS_MODE = {
  EIP1559: 'eip1559',
  LEGACY: 'legacy',
};

export const CHAIN_IDS = {
  SEPOLIA: 84532,
};

export const COLLATERAL = {
  WBTC: 'WBTC',
  WETH: 'WETH',
	tUSDT: "tUSDT",
  tUSDC: 'tUSDC',
};

export const COLLATERAL_CONFIG = {
  [COLLATERAL.WBTC]: {
    decimals: 18,
    precision: 1e18,
    precisionDelta: 1,
  },
  [COLLATERAL.WETH]: {
    decimals: 18,
    precision: 1e18,
    precisionDelta: 1,
  },
  [COLLATERAL.tUSDC]: {
    decimals: 6,
		precision: 1e18,
		precisionDelta: 1,
  },
	[COLLATERAL.tUSDT]: {
		decimals: 6,
		precision: 1e18,
		precisionDelta: 1,
	},
};

export const NETWORKS = {
  [CHAIN_IDS.SEPOLIA]: {
    chainName: 'base sepolia',
    chainId: CHAIN_IDS.SEPOLIA,
    gasMode: GAS_MODE.LEGACY,
    gasStationUrl: undefined,
    diamondAddress: '0xa7323f2860E66b763dd4aF6c9C9Ab9D452e47922',
    collaterals: [
      {
        symbol: COLLATERAL.WETH,
        collateralIndex: 0,
      },
      {
        symbol: COLLATERAL.WBTC,
        collateralIndex: 1,
      },
      {
        symbol: COLLATERAL.tUSDC,
        collateralIndex: 2,
      },
			{
				symbol: COLLATERAL.tUSDT,
				collateralIndex: 3,
			},
    ],
		feedIds : [
			"0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace",
			"0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",
			"0x2f95862b045670cd22bee3114c39763a4a08beeb663b145d283c31d7d1101c4f",
			"0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d",
			"0x8963217838ab4cf5cadc172203c1f0b763fbaa45f346d8ee50ba994bbcac3026",
			"0xec5d399846a9209f3fe5881d70aae9268c94339ff9817e8d18ff19fa05eea1c8",
			"0x93da3352f9f1d105fdfe4971cfa80e9dd777bfc5d0f683ebb6e1294b92137bb7",
			"0x5de33a9112c2b700b8d30b8a3402c103578ccfa2765696471cc672bd5cf6ac52",
			"0xc415de8d2eba7db216527dff4b60e8f3a5311c740dadb233e13e12547e226750",
			"0xca3eed9b267293f6595901c734c7525ce8ef49adafe8284606ceb307afa2ca5b",
			"0xd0ca23c1cc005e004ccf1db5bf76aeb6a49218f43dac3d4b275e92de12ded4d1",
			"0x16dad506d7db8da01c87581c87ca897a012a153557d4d578c3b9c9e1bc0632f1",
			"0xa995d00bb36a63cef7fd2c287dc105fc8f3d93779f062f09551b0af3e81ec30b",
			"0xef2c98c804ba503c6a707e38be4dfbb16683775f195b091252bf24693042fd52",
			"0x765d2ba906dbc32ca17cc11f5310a89e9ee1f6420508c63861f2f8ba4ee34bb2",
			"0xf2fb02c32b055c805e7238d628e5e9dadef274376114eb1f012337cabe93871e",
			"0x9db6bc1e6e9e5e60f6884e1cd8e4399cca9d0454c6e7234ad79680cf139748f5"
		],
  },
};
