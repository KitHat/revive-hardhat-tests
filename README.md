# Sample Hardhat Project


To run the test copy resolc, substrate node and eth-rpc to the root of the project and run the commands:

```shell
npm i
npx hardhat test
```

The error I am seeing:

```shell
Successfully compiled 13 Solidity files


  Lock
    Deployment
      1) Should work


  0 passing (65ms)
  1 failing

  1) Lock
       Deployment
         Should work:
     ProviderError: Failed to instantiate contract: Module(ModuleError { index: 80, error: [9, 0, 0, 0], message: Some("CodeNotFound") })
      at HttpProvider.request (/Users/nikitakhateev/projects/create-bug/node_modules/hardhat/src/internal/core/providers/http.ts:107:21)
      at processTicksAndRejections (node:internal/process/task_queues:95:5)
      at HardhatEthersProvider.estimateGas (/Users/nikitakhateev/projects/create-bug/node_modules/@nomicfoundation/hardhat-ethers/src/internal/hardhat-ethers-provider.ts:246:27)
      at /Users/nikitakhateev/projects/create-bug/node_modules/@nomicfoundation/hardhat-ethers/src/signers.ts:235:35
      at async Promise.all (index 0)
      at HardhatEthersSigner._sendUncheckedTransaction (/Users/nikitakhateev/projects/create-bug/node_modules/@nomicfoundation/hardhat-ethers/src/signers.ts:256:7)
      at HardhatEthersSigner.sendTransaction (/Users/nikitakhateev/projects/create-bug/node_modules/@nomicfoundation/hardhat-ethers/src/signers.ts:125:18)
      at ContractFactory.deploy (/Users/nikitakhateev/projects/create-bug/node_modules/ethers/src.ts/contract/factory.ts:111:24)
      at deploy (/Users/nikitakhateev/projects/create-bug/test/Lock.js:16:18)
      at Context.<anonymous> (/Users/nikitakhateev/projects/create-bug/test/Lock.js:21:7)
```