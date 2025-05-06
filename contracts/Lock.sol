// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Lock {
    constructor(address owner) {
        ProxyAdmin c = new ProxyAdmin(owner);
    }
}
