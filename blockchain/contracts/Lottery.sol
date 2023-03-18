// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract Lottery {
    address public owner;
    address payable[] public players;
    address[] public winners;
    uint256 public lotteryId;

    constructor() {
        owner = msg.sender;
        lotteryId = 0;
    }
}
