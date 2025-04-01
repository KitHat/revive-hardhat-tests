# Sample Hardhat Project


To run the test copy resolc, substrate node and eth-rpc to the root of the project and run the commands:

```shell
npm i
npx hardhat compile
```

The error I am seeing:
```bash
Error: Expected integer but got 'null'
    at parseInteger (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/hardhat-ignore-warnings/src/plugin.ts:83:11)
    at /Users/nikitakhateev/projects/hardhat-revive-test/node_modules/hardhat-ignore-warnings/src/plugin.ts:63:46
    at Array.flatMap (<anonymous>)
    at OverriddenTaskDefinition._action (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/hardhat-ignore-warnings/src/plugin.ts:58:28)
    at processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async Environment._runTaskDefinition (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/hardhat/src/internal/core/runtime-environment.ts:351:14)
    at async Environment.run (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/hardhat/src/internal/core/runtime-environment.ts:184:14)
    at async SimpleTaskDefinition.action (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/hardhat/src/builtin-tasks/compile.ts:1037:7)
    at async Environment._runTaskDefinition (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/hardhat/src/internal/core/runtime-environment.ts:351:14)
    at async Environment._runTaskDefinition (/Users/nikitakhateev/projects/hardhat-revive-test/node_modules/hardhat/src/internal/core/runtime-environment.ts:351:14)
```
