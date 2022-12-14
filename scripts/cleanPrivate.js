const Web3 = require('web3');
const minimist = require('minimist');
const fs = require('fs');
const readline = require('readline');
//truffle exec scripts/getBalancesFromList.js --tokenaddr=Fa14Fa6958401314851A17d6C5360cA29f74B57B --network=live
let main = async() => {
  let balances = {};
  var argv = minimist(process.argv.slice(2));
  var lineReader = readline.createInterface({
    input: fs.createReadStream('privates.txt')
  });

  lineReader.on('line', async(line) => {
    try {
      let tokens = line.split(" ");
      let address = tokens[0];
      let expected = Number.parseFloat(tokens[1]);
      if(balances[address] != undefined) {
        balances[address] += expected;
      } else {
        balances[address] = expected;
      }
      
      //let balance = 0;
      // const TokenJson = require(`../deployments/${argv["network"]}-0x${argv["tokenaddr"]}/Token.json`);
      // let TokenContract = new web3.eth.Contract(TokenJson.abi, `0x${argv["tokenaddr"]}`);
      // let balance = await TokenContract.methods.balanceOf(`${address}`).call();
      // balance = balance/1000000000000000000;
      // 
      // let percent = balance/(2*expected);
      // console.log(`${address}\t${expected}\t${balance}\t${percent}`);
      
    } catch(err) {
      console.log(err);
    }
  });
  lineReader.on('close', () => {
    Object.keys(balances).forEach((item, i) => {
      console.log(`${item} ${balances[item]}`);
    });
  });
}
main();
