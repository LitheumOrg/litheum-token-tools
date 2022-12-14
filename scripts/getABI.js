const minimist = require('minimist');

module.exports = async(callback) => {
  try {  
    var argv = minimist(process.argv.slice(2));
    const TokenJson = require(`../deployments/${argv["network"]}-0x${argv["tokenaddr"]}/Token.json`);
    let TokenContract = new web3.eth.Contract(TokenJson.abi, `0x${argv["tokenaddr"]}`);
    console.log(JSON.stringify(TokenJson.abi));
  } catch(err) {
    console.log(err);
  }
  callback();  
}
