# Distributed File Manager using IPFS, CELO and ReactJS

> There are few requirements to like `Node.js` should be installed in your system and `Metamask` in your browser. You need to setup your Metamask with `Celo` RPC URL (See step 7).

## Steps to run this project

<br>

**1. Clone the repository** - Clone this repository by running the following command in your terminal.

```bash
git clone https://github.com/rajranjan0608/dfm
```

**2. Install dependencies** - Go to the `dfm` directory and install the required dependencies using npm.

```bash
cd dfm
npm install
sudo npm install -g truffle
```

**3. Make a CELO wallet** - Make a `Celo` wallet at [here](https://celowallet.app/) and save your `MNEMONICS` in the `.env` file as instructed below. Also, fund your wallet address [here](https://celo.org/developers/faucet).

**4. Put your MNEMONIC in `.env` file** - Make a new file `.env` inside the `src` directory and put your `Celo` mnemonic like shown below (double quotes are neccessary).

```javascript
MNEMONIC="<your_mnemonic>"
```

**5. Migrate your smart contract** - Run the following command in the `src` directory to deploy your smart contract on the `Celo` network.

```
truffle migrate --network alfajores --reset
```

**6. Start the ReactJS application** - Use the following command to start the ReactJS server (in `dfm` directory).

```
npm start
```

**7. Metamask - Celo Alfajores setup** - In the Metamask extension, add a custom RPC by clicking at the network dropdown in the center of the extension. Fill the details as shown in the below image.

<br>

<center>
    <img src = "https://i.imgur.com/3eFZpJn.png" style = "width: 250px;">
</center>

<br>

> Network Name - `Celo Alfajores` <br>
  New RPC URL - `https://alfajores-forno.celo-testnet.org` <br>
  Chain ID - `44787` <br>
  Currency Symbol - `CELO` <br>

<br>

**Now open the browser and go to http://localhost:3000 to interact with the Celo DApp**
