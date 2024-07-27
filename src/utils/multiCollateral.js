import { ABIS as abis, ABIS, COLLATERAL_CONFIG } from '../constants/index.js';
import ethers from 'ethers';

export const getEthersContract = (web3Contract, provider) => {
  return new ethers.Contract(web3Contract.options.address, web3Contract.options.jsonInterface, provider);
};

export const initContracts = async (w3, ctx, networkConfig) => {
  ctx.contracts.diamond = new w3.eth.Contract(abis.MULTI_COLLAT_DIAMOND, networkConfig.diamondAddress);

  for (const collateral of networkConfig.collaterals) {
    ctx.collaterals[collateral.collateralIndex] = {
      ...collateral,
      ...COLLATERAL_CONFIG[collateral.symbol],
      price: (await ctx.contracts.diamond.methods.getCollateralPriceUsd(collateral.collateralIndex).call()) / 1e8,
    };
    ctx.borrowingFeesContext[collateral.collateralIndex] = { groups: [], pairs: [] };
  }
};

export const leverageXId = new Map([
	// BTC
	[0, 1],
	// ETH
	[1, 0],
	//BNB
	[47,2],
	// SOL
	[33, 3],
  // TON
	[107, 4],
	// XRP
	[19, 5],
	//AVAX,
	[102, 6],
	// MATIC
	[4, 7],
	// NEAR
	[104, 8],
	// MATIC
	[11, 9],
	// MSFT
	[62, 10]

]);

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
	['d0ca23c1cc005e004ccf1db5bf76aeb6a49218f43dac3d4b275e92de12ded4d1', 10]

]);
