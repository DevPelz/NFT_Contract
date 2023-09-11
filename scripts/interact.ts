import { ethers } from "hardhat";

async function main() {
const nftContract = "0xF6dB22642Bf6dAC8c540260A2A11C4C7e69Ca653";
const nft =  await ethers.getContractAt("IMyNft", nftContract);

// console.log("==========minting==========");

// await nft._safeMint("https://lavender-underground-monkey-111.mypinata.cloud/ipfs/QmNosYusKSzaonMTLyGz9sSrzfY7hBYZWd7JJL9xPsmeE4");

// console.log("==========minted==========");

console.log("==========fetching URI==========");

console.log(`tokenURI: ${await nft.tokenURI(1)}`);

console.log("==========fetch ended==========");
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
