const Web3 = require('web3');
const minimist = require('minimist');

module.exports = async(callback) => {
  var argv = minimist(process.argv.slice(2));
  const TokenJson = require(`../deployments/${argv["network"]}-0x${argv["tokenaddr"]}/Token.json`);
  let TokenContract = new web3.eth.Contract(TokenJson.abi, `0x${argv["tokenaddr"]}`);
  let nonce = await TokenContract.methods.getMintingNonce().call();
  console.log(nonce);
  callback();  
}
