const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
const getSumMine = (arr, indexForArr, indexCurrent) => {
  let sum = 0;
  let first = indexCurrent === 0 ? 0 : -1;
  let last = indexCurrent === arr[0].length - 1 ? 1 : 2;
  if (indexForArr !== 0) {
    for (let k = first; k < last; k++) {
      sum = arr[indexForArr - 1][indexCurrent + k] ? sum + 1 : sum;
    }
  }
  if (indexForArr !== arr.length - 1) {
    for (let k = first; k < last; k++) {
      sum = arr[indexForArr + 1][indexCurrent + k] ? sum + 1 : sum;
    }
  }
  if (indexCurrent !== 0) {
    sum = arr[indexForArr][indexCurrent - 1] ? sum + 1 : sum;
  }
  if (indexCurrent !== arr[0].length - 1) {
    sum = arr[indexForArr][indexCurrent + 1] ? sum + 1 : sum;
  }
  return sum;
};

function minesweeper(matrix) {
  const newArr = [];
  matrix.forEach((el, index, arr) => {
    newArr.push([]);
    el.forEach((el1, index1) => {
      newArr[index][index1] = getSumMine(arr, index, index1);
    });
  });
  return newArr;
}

module.exports = {
  minesweeper,
};
