# Sample Hardhat Project


To run the test copy resolc, substrate node and eth-rpc to the root of the project and run the commands:

```shell
npm i
npx hardhat test
npx hardhat test tests/utils/Arrays.test.js
```

The error I am seeing:
```bash
 55 passing (6m)
  6 failing

  1) Arrays
       address
         sort
           address[] of length 32
             "after each" hook for "sort already sorted array":
     ProviderError: Failed to instantiate contract: Module(ModuleError { index: 80, error: [10, 0, 0, 0], message: Some("ContractTrapped") })
      at HttpProvider.request (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/hardhat/src/internal/core/providers/http.ts:107:21)
      at processTicksAndRejections (node:internal/process/task_queues:95:5)
      at async staticCallResult (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/ethers/src.ts/contract/contract.ts:337:22)
      at async staticCall (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/ethers/src.ts/contract/contract.ts:303:24)
      at async Proxy.sortReverse (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/ethers/src.ts/contract/contract.ts:351:41)
      at async Context.<anonymous> (/Users/nikitakhateev/projects/hardhat-revive-test/test/utils/Arrays.test.js:57:22)

  2) Arrays
       address
         sort
           address[] of length 128
             "after each" hook for "sort already sorted array":
     ProviderError: Failed to instantiate contract: Module(ModuleError { index: 80, error: [10, 0, 0, 0], message: Some("ContractTrapped") })
      at HttpProvider.request (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/hardhat/src/internal/core/providers/http.ts:107:21)
      at processTicksAndRejections (node:internal/process/task_queues:95:5)
      at async staticCallResult (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/ethers/src.ts/contract/contract.ts:337:22)
      at async staticCall (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/ethers/src.ts/contract/contract.ts:303:24)
      at async Proxy.sortReverse (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/ethers/src.ts/contract/contract.ts:351:41)
      at async Context.<anonymous> (/Users/nikitakhateev/projects/hardhat-revive-test/test/utils/Arrays.test.js:57:22)

  3) Arrays
       bytes32
         sort
           bytes32[] of length 32
             "after each" hook for "sort reversed array":
     ProviderError: Failed to instantiate contract: Module(ModuleError { index: 80, error: [10, 0, 0, 0], message: Some("ContractTrapped") })
      at HttpProvider.request (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/hardhat/src/internal/core/providers/http.ts:107:21)
      at processTicksAndRejections (node:internal/process/task_queues:95:5)
      at async staticCallResult (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/ethers/src.ts/contract/contract.ts:337:22)
      at async staticCall (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/ethers/src.ts/contract/contract.ts:303:24)
      at async Proxy.sort (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/ethers/src.ts/contract/contract.ts:351:41)
      at async Context.<anonymous> (/Users/nikitakhateev/projects/hardhat-revive-test/test/utils/Arrays.test.js:56:22)

  4) Arrays
       bytes32
         sort
           bytes32[] of length 128
             "after each" hook for "sort already sorted array":
     ProviderError: Failed to instantiate contract: Module(ModuleError { index: 80, error: [10, 0, 0, 0], message: Some("ContractTrapped") })
      at HttpProvider.request (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/hardhat/src/internal/core/providers/http.ts:107:21)
      at processTicksAndRejections (node:internal/process/task_queues:95:5)
      at async staticCallResult (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/ethers/src.ts/contract/contract.ts:337:22)
      at async staticCall (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/ethers/src.ts/contract/contract.ts:303:24)
      at async Proxy.sortReverse (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/ethers/src.ts/contract/contract.ts:351:41)
      at async Context.<anonymous> (/Users/nikitakhateev/projects/hardhat-revive-test/test/utils/Arrays.test.js:57:22)

  5) Arrays
       uint256
         sort
           uint256[] of length 32
             "after each" hook for "sort already sorted array":
     ProviderError: Failed to instantiate contract: Module(ModuleError { index: 80, error: [10, 0, 0, 0], message: Some("ContractTrapped") })
      at HttpProvider.request (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/hardhat/src/internal/core/providers/http.ts:107:21)
      at processTicksAndRejections (node:internal/process/task_queues:95:5)
      at async staticCallResult (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/ethers/src.ts/contract/contract.ts:337:22)
      at async staticCall (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/ethers/src.ts/contract/contract.ts:303:24)
      at async Proxy.sortReverse (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/ethers/src.ts/contract/contract.ts:351:41)
      at async Context.<anonymous> (/Users/nikitakhateev/projects/hardhat-revive-test/test/utils/Arrays.test.js:57:22)

  6) Arrays
       uint256
         sort
           uint256[] of length 128
             "after each" hook for "sort already sorted array":
     ProviderError: Failed to instantiate contract: Module(ModuleError { index: 80, error: [10, 0, 0, 0], message: Some("ContractTrapped") })
      at HttpProvider.request (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/hardhat/src/internal/core/providers/http.ts:107:21)
      at processTicksAndRejections (node:internal/process/task_queues:95:5)
      at async staticCallResult (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/ethers/src.ts/contract/contract.ts:337:22)
      at async staticCall (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/ethers/src.ts/contract/contract.ts:303:24)
      at async Proxy.sortReverse (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/ethers/src.ts/contract/contract.ts:351:41)
      at async Context.<anonymous> (/Users/nikitakhateev/projects/hardhat-revive-test/test/utils/Arrays.test.js:57:22)

```
