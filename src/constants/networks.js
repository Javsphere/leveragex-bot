export const GAS_MODE = {
  EIP1559: 'eip1559',
  LEGACY: 'legacy',
};

export const CHAIN_IDS = {
  SEPOLIA: 84532,
};

export const COLLATERAL = {
	tWBTC: 'tWBTC',
	tWETH: 'tWETH',
	tUSDT: "tUSDT",
  tUSDC: 'tUSDC',
	xWBTC: 'xWBTC',
	xWETH: 'xWETH',
	xUSDC: 'xUSDC',
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
};

export const NETWORKS = {
  [CHAIN_IDS.SEPOLIA]: {
    chainName: 'base sepolia',
    chainId: CHAIN_IDS.SEPOLIA,
    gasMode: GAS_MODE.LEGACY,
    gasStationUrl: undefined,
		diamondAddress: '0xB8057B1605e25c1D8CDE6F9f875d7bcFe4A0fE33',
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
				collateralIndex: 3,
      },
			{
				symbol: COLLATERAL.tUSDT,
				collateralIndex: 2,
			},
			{
				symbol: COLLATERAL.xWETH,
				collateralIndex: 5,
			},
			{
				symbol: COLLATERAL.xWBTC,
				collateralIndex: 4,
			},
			{
				symbol: COLLATERAL.xUSDC,
				collateralIndex: 6,
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
			'0xffd11c5a1cfd42f80afb2df4d9f264c15f956d68153335374ec10722edd70472', // POL,
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
			// 1.9 adition
			'0x16dad506d7db8da01c87581c87ca897a012a153557d4d578c3b9c9e1bc0632f1', // TSLA
			'0xb1073854ed24cbc755dc527418f52b7d271f6cc967bbf8d8129112b18860a593', // NVDA
			'0x9695e2b96ea7b3859da9ed25b7a46a920a776e2fdae19a7bcfdf2b219230452d', // QQQ
			'0x6f9cd89ef1b7fd39f667101a91ad578b6c6ace4579d5f7f285a4b06aa4504be6', // GME
			'0xb5d0e0fa58a1f8b81498ae670ce93c872d14434b72c364885d4fa1b257cbb07a', // AMZN
			'0xe65ff435be42630439c96396653a342829e877e2aafaeaf1a10d0ee5fd2cf3f2', // GOOG
			'0xe190f467043db04548200354889dfe0d9d314c08b8d4e62fabf4d5a3140fecca', // GLD
			'0xb2fe0af6c828efefda3ffda664f919825a535aa28a0f19fc238945c7aff540b1', // ARKK
			'0xafb12c5ccf50495c7a7b04447410d7feb4b3218a663ecbd96aa82e676d3c4f1e', // AI
			'0xd407e68cec58205be82a6140a668dc42f8d9079bcf3be4aa4b41f41f7b983035', // EEM
			'0x8376cfd7ca8bcdf372ced05307b24dced1f15b1afafdeff715664598f15a3dd2', // NFLX
			'0x703e36203020ae6761e6298975764e266fb869210db9b35dd4e4225fa68217d0', // DIS
			'0x236b30dd09a9c00dfeec156c7b1efd646c0f01825a1758e3e4a0679e3bdff179', // VOO
			'0xad2fda41998f4e7be99a2a7b27273bd16f183d9adfc014a4f5e5d3d6cd519bf4', // PG
			'0xc1751e085ee292b8b3b9dd122a135614485a201c35dfc653553f0e28c1baf3ff', // INTC
			'0x8bf649e08e5a86129c57990556c8eec30e296069b524f4639549282bc5c07bb4', // XLE
			'0x9c68c0c6999765cf6e27adf75ed551b34403126d3b0d5b686a2addb147ed4554', // GS
			'0xd3178156b7c0f6ce10d6da7d347952a672467b51708baaf1a57ffe1fb005824a', // MCD
			'0x9aa471dccea36b90703325225ac76189baf7e0cc286b8843de1de4f31f9caa7d', // KO
			'0x7f4f157e57bfcccd934c566df536f34933e74338fe241a5425ce561acdab164e', // JPM
			'0xc719eb7bab9b2bc060167f1d1680eb34a29c490919072513b545b9785b73ee90', // V
			'0x12848738d5db3aef52f51d78d98fc8b8b8450ffb19fb3aeeb67d38f8c147ff63', // JNJ
			'0x327ae981719058e6fb44e132fb4adbf1bd5978b43db0661bfdaefd9bea0c82dc', // WMT
			'0xd00bd77d97dc5769de77f96d0e1a79cbf1364e14d0dbf046e221bce2e89710dd', // USO
			'0xe0f87bbde799f33615b83a601b66415e850788000cd7286a3e7295f23c1bb353', // GOVT


		],
  },
};
