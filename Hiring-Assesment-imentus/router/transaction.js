require('dotenv').config();
const { API_URL, PRIVATE_KEY } = process.env;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

async function makeTransaction(req, res) {
    const from = req.body.from;

    const nonce = await web3.eth.getTransactionCount(from, 'latest');
    const transaction = {
        'to': req.body.to, // faucet address to return eth
        'value': req.body.value, // 1 ETH
        'gas': 30000,
        'nonce': nonce,
       };
    return transaction
}

async function getTransactionbyAddress(req, res) {
        let tx = web3.eth.getTransaction(req.params.hash);
        return tx;
}

module.exports = {makeTransaction, getTransactionbyAddress}
