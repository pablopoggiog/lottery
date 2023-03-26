// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./VRFv2DirectFundingConsumer.sol";

contract Lottery is ConfirmedOwner, VRFv2DirectFundingConsumer {
    using SafeMath for uint256;

    address payable[] public players;
    address[] public winners;
    uint256 public lotteryId;
    uint256 public potWidthdrawalEndTime;

    event PlayerEntered(address indexed player, uint256 amount);
    event WinnerPicked(address indexed winner, uint256 amount);
    event LotteryReset(uint256 indexed lotteryId);
    event Received(address, uint);

    constructor() VRFv2DirectFundingConsumer() {
        lotteryId = 1;
        potWidthdrawalEndTime = block.timestamp;
    }

    function enter() public payable {
        require(
            block.timestamp > potWidthdrawalEndTime,
            "Next lottery not started yet"
        );
        require(msg.value >= 0.01 ether, "Ticket costs 0.01 ether");
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

    function startPickingWinner() public onlyOwner {
        requestRandomWords();
    }

    function fulfillRandomWords(
        uint256 _requestId,
        uint256[] memory _randomWords
    ) internal override {
        require(s_requests[_requestId].paid > 0, "request not found");
        s_requests[_requestId].fulfilled = true;
        s_requests[_requestId].randomWords = _randomWords;
        emit RequestFulfilled(
            _requestId,
            _randomWords,
            s_requests[_requestId].paid
        );

        finishPickingWinner(_randomWords[0]);
    }

    function finishPickingWinner(uint256 _randomNumber) internal {
        uint256 randomPlayerIndex = _randomNumber % players.length;
        address payable winner = players[randomPlayerIndex];
        uint256 pot = address(this).balance;
        winners.push(winner);
        lotteryId = lotteryId.add(1);

        emit WinnerPicked(winner, pot);
        emit LotteryReset(lotteryId);

        players = new address payable[](0);
        potWidthdrawalEndTime = block.timestamp + 10 minutes;
    }

    function withdrawPot() public payable {
        address payable lastWinner = payable(winners[winners.length - 1]);
        require(msg.sender == lastWinner, "Only winner can withdraw pot");
        require(
            block.timestamp < potWidthdrawalEndTime,
            "Too late, next lottery started"
        );
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
