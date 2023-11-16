import * as particle from '@particle-network/auth';
import * as connect from '@particle-network/connect';
import { ParticleChains } from '@particle-network/chains';
import { ParticleProvider } from '@particle-network/provider';
import { Web3 } from 'web3';

(window as any).unityWeb3 = {
  particle,
  connect,
  ParticleChains,
  ParticleProvider,
  Web3,
};
