const minimist = require('minimist');
const Web3 = require('web3');

const { buildRawTx, splitSignature, addEncryptedAccountToWeb3Wallet, getPassword } = require('./lib/helperfunctions');

let main = async() => {
  let web3 = new Web3();
  var argv = minimist(process.argv.slice(2));
  const TokenJson = require(`../deployments/${argv["network"]}-0x${argv["tokenaddr"]}/Token.json`);
  let TokenContract = new web3.eth.Contract(TokenJson.abi, `0x${argv["tokenaddr"]}`);
  let splitSig1 = splitSignature(argv["sig1"], web3);
  let splitSig2 = splitSignature(argv["sig2"], web3);
  let splitSig3 = splitSignature(argv["sig3"], web3);
  
  let account = await addEncryptedAccountToWeb3Wallet(argv["keyfile"], web3);
  let method = TokenContract.methods.mint("0x" + argv["message"], "" + splitSig1[0], "" + splitSig1[1], "" + splitSig1[2], "" + splitSig2[0], "" + splitSig2[1], "" + splitSig2[2], "" + splitSig3[0], "" + splitSig3[1], "" + splitSig3[2]);

  let gasPrice = argv["gasprice"];
  let serializedJsonTx = await buildRawTx(method.encodeABI(), `0x${argv["tokenaddr"]}`, account.address, argv["ethnonce"], gasPrice, web3);
  console.log(serializedJsonTx);
}
main();
