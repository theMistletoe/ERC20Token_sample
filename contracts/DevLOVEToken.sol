// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DevLOVEToken is ERC20, Ownable {
    constructor() ERC20("DevLOVEToken", "DVL") {
        _mint(msg.sender, 100000000000000000000000000000000);
    }

    function mint(uint amount) public onlyOwner {
        _mint(msg.sender, amount);
    }
}