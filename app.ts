import * as auth from '@particle-network/auth';
import * as connect from '@particle-network/connect';
import { ParticleChains } from '@particle-network/chains';
import { ParticleProvider } from '@particle-network/provider';
import { HttpProvider, Web3, Web3BaseProvider } from 'web3';

const ParticleWebGL = {
  auth,
  connect,
  ParticleChains,
  ParticleProvider,
  Web3,
  provider: HttpProvider,
  web3: new Web3('https://goerli.infura.io/v3/'),
};

// Function to be called when provider changes
function onVariableChange(newValue: Web3BaseProvider) {
  ParticleWebGL.web3 = new Web3(newValue);
}

// Define a setter for the variable
Object.defineProperty(ParticleWebGL, 'provider', {
  get: function () {
    return this._provider;
  },
  set: function (newValue) {
    if (newValue !== this._provider) {
      this._provider = newValue;
      onVariableChange(newValue);
    }
  },
  enumerable: true,
  configurable: true,
});

(window as any).ParticleWebGL = ParticleWebGL;

ParticleWebGL.web3.provider.on('accountsChanged', () => {});
