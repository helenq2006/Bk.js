const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, timestamp, data, previousHash=""){
        this.index=index;
        this.timestamp=timestamp;
        this.data=data;
        this.previousHash=previousHash;
        this.hash = this.calculateHash();
    }
    calculateHash()
{
    return SHA256(this.index+this.previousHash+this.timestamp+JSON.stringify(this.data)).toString();
}
}



class Blockchain {
    constructor() {
        this.chain=[];
    }
    createGenesisBlock() {
        return new Block(0, "03/02/3009", "Genesis Block", "0");
    }
}