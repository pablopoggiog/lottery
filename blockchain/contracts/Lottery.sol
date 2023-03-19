// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Lottery is Ownable {
    using SafeMath for uint256;

    address payable[] public players;
    address[] public winners;
    uint256 public lotteryId;

    constructor() {
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
        return uint256(keccak256(abi.encodePacked(owner(), block.timestamp)));
    }

    function pickWinner() public onlyOwner {
        uint256 randomPlayerIndex = getRandomNumber() % players.length;
        address payable winner = players[randomPlayerIndex];
        uint256 pot = address(this).balance;
        winner.transfer(pot);
        winners.push(winner);
        lotteryId = lotteryId.add(1);

        players = new address payable[](0);
    }

    function getWinners() public view returns (address[] memory) {
        return winners;
    }
}
