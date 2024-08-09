import { ABIS as abis, COLLATERAL_CONFIG } from '../constants/index.js';
import ethers from 'ethers';

export const getEthersContract = (web3Contract, provider) => {
  return new ethers.Contract(web3Contract.options.address, web3Contract.options.jsonInterface, provider);
};

export const initContracts = async (w3, ctx, networkConfig) => {
  ctx.contracts.diamond = new w3.eth.Contract(abis.DIAMOND, networkConfig.diamondAddress);

  for (const collateral of networkConfig.collaterals) {
    ctx.collaterals[collateral.collateralIndex] = {
      ...collateral,
      ...COLLATERAL_CONFIG[collateral.symbol],
      price: (await ctx.contracts.diamond.methods.getCollateralPriceUsd(collateral.collateralIndex).call()) / 1e8,
    };
    ctx.borrowingFeesContext[collateral.collateralIndex] = { groups: [], pairs: [] };
  }
};

export const feedIdToPriceIndex = new Map([
	// BTC
	['e62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43', 1],
	// ETH
	['ff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace', 0],
	//BNB
	['2f95862b045670cd22bee3114c39763a4a08beeb663b145d283c31d7d1101c4f',2],
	// SOL
	['ef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d', 3],
	// TON
	['8963217838ab4cf5cadc172203c1f0b763fbaa45f346d8ee50ba994bbcac3026', 4],
	// XRP
	['ec5d399846a9209f3fe5881d70aae9268c94339ff9817e8d18ff19fa05eea1c8', 5],
	//AVAX,
	['93da3352f9f1d105fdfe4971cfa80e9dd777bfc5d0f683ebb6e1294b92137bb7', 6],
	// MATIC
	['5de33a9112c2b700b8d30b8a3402c103578ccfa2765696471cc672bd5cf6ac52', 7],
	// NEAR
	['c415de8d2eba7db216527dff4b60e8f3a5311c740dadb233e13e12547e226750', 8],
	// MATIC
	['ca3eed9b267293f6595901c734c7525ce8ef49adafe8284606ceb307afa2ca5b', 9],
	// MSFT
	['d0ca23c1cc005e004ccf1db5bf76aeb6a49218f43dac3d4b275e92de12ded4d1', 10],
	// AAPL
	['0x49f6b65cb1de6b10eaf75e7c03ca029c306d0357e91b5311b175084a5ad55688', 11],
	// IBIT
	['0x9db6bc1e6e9e5e60f6884e1cd8e4399cca9d0454c6e7234ad79680cf139748f5', 12],
	// MSTR
	['0xe1e80251e5f5184f2195008382538e847fafc36f751896889dd3d1b1f6111f09', 13],
	// COIN
	['0xfee33f2a978bf32dd6b662b65ba8083c6773b494f8401194ec1870c640860245', 14],
	// TLT
	['0x9f383d612ac09c7e6ffda24deca1502fce72e0ba58ff473fea411d9727401cc1', 15],
	// SPY
	['0x19e09bb805456ada3979a7d1cbb4b6d63babc3a0f8e8a9509f68afa5c4c11cd5', 16],
	// EUR
	['0xa995d00bb36a63cef7fd2c287dc105fc8f3d93779f062f09551b0af3e81ec30b', 17],
	// JPY
	['0xef2c98c804ba503c6a707e38be4dfbb16683775f195b091252bf24693042fd52', 18],
	// XAU
	['0x765d2ba906dbc32ca17cc11f5310a89e9ee1f6420508c63861f2f8ba4ee34bb2', 19],
	// XAG
	['0xf2fb02c32b055c805e7238d628e5e9dadef274376114eb1f012337cabe93871e', 20],
]);
