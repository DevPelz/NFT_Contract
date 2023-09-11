import { ethers } from "hardhat";

async function main() {

  const nft = await ethers.deployContract("MyNft", []);

  await nft.waitForDeployment();
  console.log("============deploying===========")

  console.log(
    `NFT contract deployed to ${nft.target}`
  );

  console.log("============deployment completed===========")
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
