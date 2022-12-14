const minimist = require('minimist');

const { callMethod, addEncryptedAccountToWeb3Wallet } = require('./lib/helperfunctions');

module.exports = async(callback) => {
  try {  
    var argv = minimist(process.argv.slice(2));
    const TokenJson = require(`../deployments/${argv["network"]}-0x${argv["tokenaddr"]}/Token.json`);
    let TokenContract = new web3.eth.Contract(TokenJson.abi, `0x${argv["tokenaddr"]}`);
    
    let account = await addEncryptedAccountToWeb3Wallet(argv["keyfile"], web3);
    console.log(`Sending ${argv["amount"]}000000000000000000 to 0x${argv["to"]}...`);
    
    let method = TokenContract.methods.transfer(`0x${argv["to"]}`, `${argv["amount"]}000000000000000000`);
    let gasPrice = argv["gasprice"];
    let result = await callMethod(method, account.address, gasPrice, web3);
    console.log("transaction confirmed!");
    console.log(result);
  } catch(err) {
    console.log(err);
  }
  callback();  
}