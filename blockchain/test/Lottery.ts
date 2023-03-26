import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { Lottery } from "../typechain-types/contracts/Lottery";

const payloadToEnterLottery = { value: ethers.utils.parseEther("0.01") };

describe("Lottery", () => {
  let lottery: Lottery;
  let owner: SignerWithAddress;
  let player1: SignerWithAddress;
  let player2: SignerWithAddress;
  let signers: SignerWithAddress[];

  const setUpTest = async () => {
    signers = await ethers.getSigners();
    [owner, player1, player2] = signers;

    const lotteryFactory = await ethers.getContractFactory("Lottery", owner);
    lottery = await lotteryFactory.deploy();
    await lottery.deployed();
  };

  beforeEach(setUpTest);

  it("Should deploy the Lottery contract", async () => {
    expect(lottery.address).to.not.equal(0);
  });

  it("Should allow players to enter the lottery", async () => {
    await lottery.connect(player1).enter(payloadToEnterLottery);
    const players = await lottery.getPlayers();

    expect(players.length).to.equal(1);
    expect(players[0]).to.equal(player1.address);
  });

  it("Should not allow players to enter with less than 0.01 ether", async () => {
    const enterLotteryTx = lottery
      .connect(player1)
      .enter({ value: ethers.utils.parseEther("0.009") });

    await expect(enterLotteryTx).to.be.revertedWith("Min amount is 0.01 ether");
  });

  // it("Should allow the owner to pick a winner", async () => {
  //   await lottery.connect(player1).enter(payloadToEnterLottery);
  //   await lottery.connect(player2).enter(payloadToEnterLottery);

  //   const balanceBefore = await owner.getBalance();
  //   const pickWinnerTx = await lottery.connect(owner).pickWinner();
  //   const balanceAfter = await owner.getBalance();

  //   await expect(pickWinnerTx).not.to.be.reverted;
  //   expect(balanceAfter.lt(balanceBefore)).to.be.true;
  // });

  it("Should not allow non-owners to pick a winner", async () => {
    await lottery.connect(player1).enter(payloadToEnterLottery);

    const pickWinnerTx = lottery.connect(player1).startPickingWinner();

    expect(pickWinnerTx).to.be.revertedWith("Ownable: caller is not the owner");
  });

  // it("Should reset the lottery after picking a winner", async () => {
  //   await lottery.connect(player1).enter(payloadToEnterLottery);
  //   await lottery.connect(player2).enter(payloadToEnterLottery);
  //   await lottery.pickWinner();

  //   const players = await lottery.getPlayers();
  //   const lotteryId = await lottery.getLotteryId();

  //   expect(players.length).to.equal(0);
  //   expect(lotteryId).to.equal(1);
  // });
});
