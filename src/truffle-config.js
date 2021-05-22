const Web3 = require('web3');
const ContractKit = require('@celo/contractkit');
const getAccount = require('./getAccount').getAccount;
const FileManager = require('./build/contracts/FileManager.json');

const web3 = new Web3('https://alfajores-forno.celo-testnet.org');
const kit = ContractKit.newKitFromWeb3(web3);

async function awaitWrapper(){
    let account = await getAccount()
    let celoToken = await kit.contracts.getGoldToken();
 
    let celoBalance = await celoToken.balanceOf(account.address);
    console.log("Account address: ", account.address);
    console.log(`CELO Balance: ${celoBalance / (10**18)}`);

    while(celoBalance / (10**18) < 0.4) {
	    console.log("Balance too low to deploy contracts. Please fund your account here at https://celo.org/developers/faucet in 20 seconds\n");
    	    await new Promise(r => setTimeout(r, 20000));

	    celoBalance = await celoToken.balanceOf(account.address);
	    console.log("Account address: ", account.address);
	    console.log(`CELO Balance: ${celoBalance / (10**18)}`);
    }

    kit.connection.addAccount(account.privateKey)
    let tx = await kit.connection.sendTransaction({
        from: account.address,
        data: FileManager.bytecode
    });

    const receipt = await tx.waitReceipt()
    console.log(receipt)
}

(async () => {
	await awaitWrapper();
})();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    alfajores: {
      provider: kit.connection.web3.currentProvider,
      network_id: 44787, 
      gas: 3000000,
      gasPrice: 470000000000
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
