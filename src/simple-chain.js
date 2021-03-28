const CustomError = require("../extensions/custom-error");
const chainMaker = {
  array: [],
  getLength() {
    return this.array.length;
  },
  addLink(value) {
    if (arguments.length === 0) {
      this.array.push(["(  )"]);
    } else {
      this.array.push(["( " + value + " )"]);
    }
    return this;
  },
  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position <= 0 ||
      position > this.getLength()
    ) {
      this.array = [];
      throw new Error("Invalid input");
    } else {
      this.array.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    this.array = this.array.reverse();
    return this;
  },
  finishChain() {
    let str = this.array.join("~~");
    this.array = [];
    return str;
  },
};

module.exports = chainMaker;
