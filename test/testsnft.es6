'use strict';
const NFT = artifacts.require('NFT.sol');
//const { expectEvent, singletons, constants } = require('@openzeppelin/test-helpers');
const { makeMintingMessage32, manuallySign, splitSignature } = require('../scripts/lib/helperfunctions');
let BN = web3.utils.BN;

contract('Test NFT Contract', (accounts) => {
  let owner1  = accounts[0];
  let owner2  = accounts[1];
  let owner3  = accounts[2];
  let owner4  = accounts[3];
  let owner5  = accounts[4];
  let registryFunder = accounts[5];
  let operator  = accounts[6];
  let user1  = accounts[7];
  let user2  = accounts[8];

  let myNFT, erc1820;
  let fakeUser = "0x0000000000000000000000000000000000000000";
  let decimals = new BN(10).pow(new BN(18))
  let initSupply = new BN(1000000).mul(decimals);
  let maxSupply = new BN(10000000000).mul(decimals);
  let addOwnerKey = 10000000002;
  let removeOwnerKey = 10000000001;
  let addMintAuthKey = "0x0000000000000000000000000000000000000002";
  let removeMintAuthKey = "0x0000000000000000000000000000000000000001";
  
  let nftName = "myNFT";
  let nftTicker = "TST";
  describe('Token Tests', function() {
  
    before(async() => {
      // Change the hardcoded owners to the test owners in the contract binary
      // Token.unlinked_binary = Token.unlinked_binary.replace("1111222233334444555566667777888899991111", owner1.slice(2));
      // Token.unlinked_binary = Token.unlinked_binary.replace("1111222233334444555566667777888899992222", owner2.slice(2));
      // Token.unlinked_binary = Token.unlinked_binary.replace("1111222233334444555566667777888899993333", owner3.slice(2));
      myNFT = await NFT.new(nftName, nftTicker, { from: owner1 });
    });
    it("NFT name is set", async function() {
      let name = await myNFT.name.call();
      assert.equal(name, nftName, "name should be set");
    });

    it("NFT ticker is set", async function() {
      let ticker = await myNFT.symbol.call();
      assert.equal(ticker, nftTicker, "ticker should be set");
    });

  });
});
