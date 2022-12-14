// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.6.0 <0.8.0;

//import "./lib/openzeppelin/contracts/token/ERC20/ERC20.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract NFT is ERC721 {
    constructor (string memory name_, string memory symbol_) ERC721(name_, symbol_) {
       
    }

}
