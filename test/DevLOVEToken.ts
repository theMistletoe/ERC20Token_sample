import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("DevLOVEToken", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshopt in every test.
  async function deployFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const DevLOVEToken = await ethers.getContractFactory("DevLOVEToken");
    const devLOVEToken = await DevLOVEToken.deploy();

    return { owner, otherAccount, devLOVEToken };
  }

  describe("Deployment", function () {
    it("is set fixed amount", async function () {
      const { devLOVEToken } = await loadFixture(deployFixture);
      expect(await devLOVEToken.totalSupply()).to.equal(100000000000000);
      expect(await devLOVEToken.name()).to.equal("DevLOVEToken");
      expect(await devLOVEToken.symbol()).to.equal("DVL");
    });
  });

  describe("mint", function () {
    it("is able to mint", async function () {
      const { devLOVEToken } = await loadFixture(deployFixture);
      const tx = await devLOVEToken.mint(100);
      await tx.wait();
      expect(await devLOVEToken.totalSupply()).to.equal(100000000000100);
    });
  });
});
