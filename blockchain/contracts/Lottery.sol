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

    function enter() public payable {
        // verify it meets the minimum threshold
        require(msg.value >= 0.01 ether);
        players.push(payable(msg.sender));
    }

    function getPlayers() public view returns (address payable[] memory) {
        return players;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getLotteryId() public view returns (uint) {
        return lotteryId;
    }

    function getRandomNumber() public view returns (uint) {
        return uint(keccak256(abi.encodePacked(owner, block.timestamp)));
    }

    function pickWinner() public {
        require(msg.sender == owner);
        uint randomPlayerIndex = getRandomNumber() % players.length;
        address payable winner = players[randomPlayerIndex];
        winner.transfer(address(this).balance);
        winners.push(winner);
        lotteryId++;

        // reset players
        players = new address payable[](0);
    }
}
