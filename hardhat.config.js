require("@nomicfoundation/hardhat-toolbox");
require('hardhat-resolc');
require('hardhat-revive-node');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    hardhat: {
      polkavm: true,
      nodeConfig: {
        nodeBinaryPath: './substrate-node',
        rpcPort: 8000,
        dev: true,
      },
      adapterConfig: {
        adapterBinaryPath: './eth-rpc',
        dev: true,
      }
    },
  },
  resolc: {
    compilerSource: 'binary',
    settings: {
      optimizer: {
        enabled: true,
        runs: 400,
      },
      evmVersion: "cancun",
      compilerPath: "./resolc",
      standardJson: true,
    },
  },
  paths: {
    artifacts: './artifacts-pvm',
    cache: './cache-pvm'
  },
};

