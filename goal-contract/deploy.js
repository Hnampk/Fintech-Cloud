const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');

const compiledGoal = require('./build/Goal.json');

const provider = new HDWalletProvider(
    'rose suit over suffer bubble cinnamon gossip simple wink way sock cloud',
    'https://rinkeby.infura.io/v3/6c7272d7eb8642949017adcae41dd661'
);

const web3 = new Web3(provider);
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log("Attempting to deploy contract from account: ", accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledGoal.interface))
        .deploy({
            data: compiledGoal.bytecode,
            arguments: [['0xd5f38edc368b04bcc7e1ed15dc17ac781b79d47a', '0xd1a5deb11c85be410a5dae43d237fce53b271a0e']] 
        })
        .send({ from: accounts[0], gas: '1000000' });

    console.log("Contract deployed to: ", result.options.address);
};
deploy();