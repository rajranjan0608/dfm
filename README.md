# Distributed File Manager using IPFS, CELO and ReactJS

> There are few requirements to like `Node.js` should be installed in your system and `Metamask` in your browser. You need to setup your Metamask with `Avalanche` RPC URL (See step 7).

## Steps to run this project

<br>

**1. Clone the repository** - Clone this repository by running the following command in your terminal.

```bash
git clone https://github.com/rajranjan0608/dfm
```

**2. Switch to Avalanche branch** - Switch to `avalanche` branch using the following line.

```bash
cd dfm
git checkout avalanche
```

**3. Install dependencies** - Go to the `dfm` directory and install the required dependencies using npm.

```bash
npm install
sudo npm install -g truffle
```

**4. Make a AVAX wallet** - Make a `Avalanche` wallet at [here](https://wallet.avax.network/) and save your `MNEMONICS` in the `.env` file as instructed below. Also, fund your wallet address [here](https://faucet.avax-test.network/).

**5. Put your MNEMONIC in `.env` file** - Make a new file `.env` inside the `src` directory and put your `Avalanche` mnemonic like shown below (double quotes are neccessary).

```javascript
MNEMONIC="<your_mnemonic>"
```

**5. Migrate your smart contract** - Run the following command in the `src` directory to deploy your smart contract on the `Avalanche` network.

```
truffle migrate --network fuji --reset
```

**6. Start the ReactJS application** - Use the following command to start the ReactJS server (in `dfm` directory).

```
npm start
```

**7. Metamask - Avalanche Fuji setup** - In the Metamask extension, add a custom RPC by clicking at the network dropdown in the center of the extension.

<br>

| Info | Value |
| :--- | :--- |
| Network Name | Avalanche Fuji |
| New RPC URL | [https://api.avax-test.network/ext/bc/C/rpc](https://api.avax-test.network/ext/bc/C/rpc) |
| Chain ID | 43113 |
| Currency Symbol | AVAX-C |
| Block Explorer URL | [https://cchain.explorer.avax-test.network](https://cchain.explorer.avax-test.network) |

<br>

**Now open the browser and go to http://localhost:3000 to interact with the Avalanche DApp**
