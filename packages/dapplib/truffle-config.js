require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz kiwi october slab chapter deny radar protect inflict knee sure tunnel'; 
let testAccounts = [
"0x4a7cd9755c2684a79182523deaa103f0c9d0fc39e2d990ec421078df5fab2d10",
"0x807dc8b74b4fbe0bade07ebae088edb9aa81cb0509185db242c1eac29bdf3e57",
"0xc1fe08c34086f82933d61104f648a53fb15ecd77e3f2362cea04bc1ab83bb8a8",
"0x932e0b326f2e5509809b56f1e3744536c9e6cb8a3ee024ed5e34c5bd6c8fece3",
"0xee7ceff9348796b9a552bf43aecc9e7194af18b5700ea40c897812a1837e59db",
"0x39191d829d1885e372baf8fdb84e5c741baa9cf6463f03d60dc81ae21c96752b",
"0xb5d01f098a07757b8a19693b1abc9a661bf99677534aea0a935d20f603bfdcd3",
"0x65b4bb3b828aa65ed17ff4908e7c003239ce323e79d30895b46a3fe6707a6142",
"0x82706069e44548e5c6fee4fac510b2888426648fdfa21815a036b65949e20336",
"0xd3aa124c5550068d500df1da5da2d2327a0dd17dc6e559000c851839aa32b969"
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

