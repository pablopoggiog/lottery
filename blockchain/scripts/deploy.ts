import { ethers } from "hardhat";

async function main() {
  const Lottery = await ethers.getContractFactory("Lottery");
  const lottery = await Lottery.deploy();

  await lottery.deployed();

  console.log(`Lottery deployed to ${lottery.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
