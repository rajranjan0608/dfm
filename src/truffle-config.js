const Web3 = require('web3')
const ContractKit = require('@celo/contractkit')
const web3 = new Web3('https://alfajores-forno.celo-testnet.org')
const kit = ContractKit.newKitFromWeb3(web3)
const getAccount = require('./getAccount').getAccount
const HelloWorld = require('./build/contracts/FileManager.json')

async function awaitWrapper(){
    let account = await getAccount()
    console.log(account.address)
    kit.connection.addAccount(account.privateKey) // this account must have a CELO balance to pay transaction fees

    let tx = await kit.connection.sendTransaction({
        from: account.address,
        data: HelloWorld.bytecode
    })

    const receipt = await tx.waitReceipt()
    console.log(receipt)
}

awaitWrapper();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    },
    alfajores: {
     
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}
