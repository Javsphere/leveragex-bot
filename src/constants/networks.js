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
		decimals: 18,
		precision: 1e18,
		precisionDelta: 1,
  },
	[COLLATERAL.tUSDT]: {
		decimals: 18,
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
		diamondAddress: '0x1c31729b02D9151a61BB1f92f3dae90d99F24257',
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
				collateralIndex: 3,
      },
			{
				symbol: COLLATERAL.tUSDT,
				collateralIndex: 2,
			},
    ],
		rewardTokenId: '0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b',
		feedIds : [
			'0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace', // ETH, " ,
			'0x2f95862b045670cd22bee3114c39763a4a08beeb663b145d283c31d7d1101c4f', // BTC,
			'0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d', // SOL,
			'0x8963217838ab4cf5cadc172203c1f0b763fbaa45f346d8ee50ba994bbcac3026', // TON,
			'0xec5d399846a9209f3fe5881d70aae9268c94339ff9817e8d18ff19fa05eea1c8', // XRP,
			'0x93da3352f9f1d105fdfe4971cfa80e9dd777bfc5d0f683ebb6e1294b92137bb7', // AVAX,
			'0x5de33a9112c2b700b8d30b8a3402c103578ccfa2765696471cc672bd5cf6ac52', // MATIC,
			'0xc415de8d2eba7db216527dff4b60e8f3a5311c740dadb233e13e12547e226750', // NEAR,
			'0xca3eed9b267293f6595901c734c7525ce8ef49adafe8284606ceb307afa2ca5b', // DOT,
			'0xa995d00bb36a63cef7fd2c287dc105fc8f3d93779f062f09551b0af3e81ec30b', // EUR/USD
			'0xef2c98c804ba503c6a707e38be4dfbb16683775f195b091252bf24693042fd52', // USD/JPY
			'0x765d2ba906dbc32ca17cc11f5310a89e9ee1f6420508c63861f2f8ba4ee34bb2', // XAU/USD
			'0xf2fb02c32b055c805e7238d628e5e9dadef274376114eb1f012337cabe93871e', // XAG/USD
			'0x49f6b65cb1de6b10eaf75e7c03ca029c306d0357e91b5311b175084a5ad55688', // APPL
			'0x9db6bc1e6e9e5e60f6884e1cd8e4399cca9d0454c6e7234ad79680cf139748f5', // ibit
			'0xd0ca23c1cc005e004ccf1db5bf76aeb6a49218f43dac3d4b275e92de12ded4d1', // MSFT
			'0xe1e80251e5f5184f2195008382538e847fafc36f751896889dd3d1b1f6111f09', // MSTR
			'0xfee33f2a978bf32dd6b662b65ba8083c6773b494f8401194ec1870c640860245', // COIN
			'0x9f383d612ac09c7e6ffda24deca1502fce72e0ba58ff473fea411d9727401cc1', // TLT
			'0x19e09bb805456ada3979a7d1cbb4b6d63babc3a0f8e8a9509f68afa5c4c11cd5', // SPY
		],
  },
};
