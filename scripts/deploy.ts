import { ethers } from "hardhat";

async function main() {
  const DevLOVEToken = await ethers.getContractFactory("DevLOVEToken");
  const devLOVEToken = await DevLOVEToken.deploy();
  await devLOVEToken.deployed();
  console.info("deployed address", devLOVEToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
