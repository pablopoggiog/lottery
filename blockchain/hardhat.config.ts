import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config({ path: __dirname + "/../.env" });

const config: HardhatUserConfig = {
  solidity: "0.8.18"
};

export default config;
