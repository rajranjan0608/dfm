const Web3 = require('web3')
const ethers = require('ethers')
const fs = require('fs')
const path = require('path')
var web3 = new Web3()

require('dotenv').config();

const filePath = path.join(__dirname, './.env')

function getAccount() {
    return new Promise(resolve => {
        if(fs.existsSync(filePath)){
		resolve(ethers.Wallet.fromMnemonic(process.env.MNEMONIC));
        } else {
            let randomAccount = web3.eth.accounts.create()
        
            fs.writeFile(filePath, randomAccount.privateKey, (err) => {
                if(err) {
                    return console.log(err);
                }
            })

            resolve(randomAccount)
        }
    })
}

module.exports = {
    getAccount
}
