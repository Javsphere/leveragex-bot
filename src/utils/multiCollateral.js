import { ABIS as abis, COLLATERAL_CONFIG } from '../constants/index.js';
import ethers from 'ethers';

export const getEthersContract = (web3Contract, provider) => {
  return new ethers.Contract(web3Contract.options.address, web3Contract.options.jsonInterface, provider);
};

export const initContracts = async (w3, ctx, networkConfig) => {
  ctx.contracts.diamond = new w3.eth.Contract(abis.DIAMOND, networkConfig.diamondAddress);

	ctx.evmProvider = new ethers.providers.JsonRpcProvider(process.env.RPC);
	ctx.signer = new ethers.Wallet(process.env.PRIVATE_KEY, ctx.evmProvider);

	ctx.contracts.diamondHttp = new ethers.Contract(networkConfig.diamondAddress, abis.DIAMOND, ctx.evmProvider);

  for (const collateral of networkConfig.collaterals) {
    ctx.collaterals[collateral.collateralIndex] = {
      ...collateral,
      ...COLLATERAL_CONFIG[collateral.symbol],
      price: (await ctx.contracts.diamond.methods.getCollateralPriceUsd(collateral.collateralIndex).call()) / 1e8,
    };
    ctx.borrowingFeesContext[collateral.collateralIndex] = { groups: [], pairs: [] };
  }
};
