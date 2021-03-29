const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    arr.forEach((element) => {
      let curr = 1;
      if (Array.isArray(element)) {
        curr = curr + this.calculateDepth(element);
      }
      depth = Math.max(curr, depth);
    });
    return depth;
  }
};
