const minimist = require('minimist');
let BN = web3.utils.BN;

module.exports = async(callback) => {
  var argv = minimist(process.argv.slice(2));
  try {
    const TokenJson = require(`../deployments/${argv["network"]}-0x${argv["tokenaddr"]}/Token.json`);
    let TokenContract = new web3.eth.Contract(TokenJson.abi, `0x${argv["tokenaddr"]}`);
    let supply = await TokenContract.methods.totalSupply().call();
    let decimals = new BN(10).pow(new BN(18));
    console.log(new BN(supply).div(decimals).toString());
  } catch (e) {
    console.log(e);  
  } finally {
    callback();  
  }
}
