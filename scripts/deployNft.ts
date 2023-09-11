import { ethers } from "hardhat";

async function main() {

  const nft = await ethers.deployContract("MyNft", []);

  await nft.waitForDeployment();

  console.log(
    `NFT contract deployed to ${nft.target}`
  );
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
