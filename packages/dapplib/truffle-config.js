require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nasty fresh space strong razor toss under gesture flower army ghost'; 
let testAccounts = [
"0x3ca593e17bd3bbda06c87ab170677e32dc3244261457535f7e60a15e9aecb4a6",
"0x24bd9d48119a633b07b304dfd2f9a6a88c495c59bd2c06368180d91a1a7c9879",
"0xfae033723f1432879bfe7eb129ae7b8c1c24d7382d9d0a7eb4a3525f21f36e22",
"0x32ba8f9c65abb3f15fb340b50788332ecac564e8898a30a681e6f2a1112d1fd8",
"0x6254187e6a5c51e62067ce5c767fa6df7b98c7299971a1463ec6998f1afaee9f",
"0x3961b943d8f83ebbfeec8d9ee825111e98b8ef083a3730b9e14fc0b25bc391bb",
"0xaf882b5fee133fc498a61abc4bc889c6c0ea0d85010780dff778ef5f431ae6ec",
"0xeca760e13a0040dda2a01f0869781fd63cf04b9298e7a50806ad74d804752373",
"0xf742e4d0a85c81c52b932367ecbf2fa4631074cf9a3d0e1ec1e0b229d1169bf4",
"0x7fb4f5eaab089f685e5d07daa39734e0d284eda60bde7bf32460a4ba6362bd2c"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

