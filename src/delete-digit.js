const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const strFromDigits = n.toString();
  const newArr = [];
  for (let i = 0; i < strFromDigits.length; i += 1) {
    newArr.push(+strFromDigits.replace(strFromDigits[i], ""));
  }
  return Math.max(...newArr);
}

module.exports = {
  deleteDigit,
};
