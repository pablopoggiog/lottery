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
        require(msg.value >= 0.01 ether, "Min amount is 0.01 ether");
        players.push(payable(msg.sender));
    }

    function getPlayers() public view returns (address payable[] memory) {
        return players;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getLotteryId() public view returns (uint256) {
        return lotteryId;
    }

    function getRandomNumber() public view returns (uint256) {
        return uint256(keccak256(abi.encodePacked(owner, block.timestamp)));
    }

    function pickWinner() public {
        require(msg.sender == owner, "Only owner can trigger picking a winner");
        uint256 randomPlayerIndex = getRandomNumber() % players.length;
        address payable winner = players[randomPlayerIndex];
        winner.transfer(address(this).balance);
        winners.push(winner);
        lotteryId++;

        players = new address payable[](0);
    }

    function getWinners() public view returns (address[] memory) {
        return winners;
    }
}
