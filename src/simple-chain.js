const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],
  getLength() {
    this.chain.length;
  },
  addLink(value) {
    if (arguments.length === 0) {
      this.chain.push("(  )");
    } else {
      this.chain.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (
      Number.isInteger(position) &&
      position <= this.chain.length &&
      position > 0
    ) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const chainRes = this.chain;
    this.chain = [];
    return chainRes.join("~~");
  },
};

module.exports = {
  chainMaker,
};
