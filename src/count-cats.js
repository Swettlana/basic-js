const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix.reduce((acc, arr) => {
    let count = arr.reduce((sum, item) => {
      return (sum = item === "^^" ? (sum += 1) : sum);
    }, 0);
    return (acc += count);
  }, 0);
}

module.exports = {
  countCats,
};
