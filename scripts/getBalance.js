const Web3 = require('web3');
const minimist = require('minimist');
const fs = require('fs').promises;


module.exports = async(callback) => {
  try {
    var argv = minimist(process.argv.slice(2));
    const TokenJson = require(`../deployments/${argv["network"]}-0x${argv["tokenaddr"]}/Token.json`);
    let TokenContract = new web3.eth.Contract(TokenJson.abi, `0x${argv["tokenaddr"]}`);
    let balance = await TokenContract.methods.balanceOf(`0x${argv["addr"]}`).call();
    console.log(balance);
    callback();    
  } catch(err) {
    console.log(err);
  }
  
}
