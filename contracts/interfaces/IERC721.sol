// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IMyNft {
    function _safeMint(string memory _tokenUri) external;

    function _burn(uint256 tokenId) external;

    function tokenURI(uint256 tokenId) external view returns (string memory);
}
