require("@nomicfoundation/hardhat-toolbox");
require('hardhat-resolc');
require('hardhat-revive-node');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    hardhat: {
      accounts: [
        {
          privateKey: "0x5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133",
          balance: "100000000000000",
        },
        {
          privateKey: "0x8075991ce870b93a8870eca0c0f91913d12f47948ca0fd25b49c6fa7cdbeee8b",
          balance: "100000000000000",
        }
      ],
      polkavm: true,
      allowUnlimitedContractSize: true,
      nodeConfig: {
        nodeBinaryPath: '/Users/nikitakhateev/substrate-node',
        rpcPort: 8000,
        dev: true,
      },
      adapterConfig: {
        adapterBinaryPath: '/Users/nikitakhateev/eth-rpc',
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
      compilerPath: "/Users/nikitakhateev/.cargo/bin/resolc",
      standardJson: true,
    },
  },
  paths: {
    artifacts: './artifacts-pvm',
    cache: './cache-pvm'
  },
};

