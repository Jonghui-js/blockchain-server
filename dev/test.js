const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: 1584421972478,
      transactions: [],
      nonce: 100,
      hash: '0',
      previousBlockHash: '0'
    },
    {
      index: 2,
      timestamp: 1584421981323,
      transactions: [],
      nonce: 18140,
      hash: '0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100',
      previousBlockHash: '0'
    },
    {
      index: 3,
      timestamp: 1584421987771,
      transactions: [
        {
          amount: 12.5,
          sender: '00',
          recipient: '9c6a4ad3c3554e888aa8d89c573431ac',
          transactionId: '85e8603e37a84038aefadde0f1700363'
        }
      ],
      nonce: 66819,
      hash: '0000cc561acd312becbc531dad19b4eab4b04e79a279e6e062f962e3a85743e9',
      previousBlockHash:
        '0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100'
    }
  ],
  pendingTransactions: [
    {
      amount: 12.5,
      sender: '00',
      recipient: '9c6a4ad3c3554e888aa8d89c573431ac',
      transactionId: 'efe9028d3ecb4b539f4e617bf871c27c'
    }
  ],
  currentNodeUrl: 'http://localhost:3001',
  networkNodes: []
}.json;

console.log('VALID: ', bitcoin.chainIsValid(bc1.chain));
/*
const previousBlockHash = 'OIDKFJF458OIDJVLK245LKSKJ';
const currentBlockData = [
  {
    amount: 10,
    sender: 'MDOVKNP30DGKBOS',
    recipient: 'SLPO240SKJVOKAL'
  },
  {
    amount: 30,
    sender: 'MDOVKNP30DGKBOS',
    recipient: 'SLPO2DPVILWMJOKAL'
  },
  {
    amount: 3330,
    sender: 'MDKSOVJLV309BOS',
    recipient: 'SLPO24LSPI20SKJVOKAL'
  }
];*/
