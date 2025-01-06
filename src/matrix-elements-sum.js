const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((sum, el, index, arr) => {
    return (
      sum +
      el.reduce((sum1, el2, index2) => {
        if (index === 0 || arr[index - 1][index2] !== 0) {
          console.log({ el2 });
          sum1 = sum1 + el2;
        }
        return sum1;
      }, 0)
    );
  }, 0);
}

module.exports = {
  getMatrixElementsSum,
};
