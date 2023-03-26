// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract Lottery is Ownable {
    using SafeMath for uint256;

    address payable[] public players;
    address[] public winners;
    uint256 public lotteryId;

    event PlayerEntered(address indexed player, uint256 amount);
    event WinnerPicked(address indexed winner, uint256 amount);
    event LotteryReset(uint256 indexed lotteryId);
    event Received(address indexed from, uint256 amount);

    constructor() {
        lotteryId = 0;
    }

    function enter() public payable {
        require(msg.value >= 0.01 ether, "Min amount is 0.01 ether");
        players.push(payable(msg.sender));
        emit PlayerEntered(msg.sender, msg.value);
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
        winners.push(winner);
        lotteryId = lotteryId.add(1);

        emit WinnerPicked(winner, pot);
        emit LotteryReset(lotteryId);

        players = new address payable[](0);
    }

    function withdrawPot() public payable {
        address payable lastWinner = payable(winners[winners.length - 1]);
        require(msg.sender == lastWinner, "Only winner can withdraw pot");
        uint256 pot = address(this).balance;
        payable(lastWinner).transfer(pot);
    }

    function getWinners() public view returns (address[] memory) {
        return winners;
    }

    receive() external payable {
        emit Received(msg.sender, msg.value);
    }
}
