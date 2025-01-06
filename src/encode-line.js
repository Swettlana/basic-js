const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const res = [];
  let sum = 1;
  str.split("").forEach((char, index, arr) => {
    if (char === arr[index + 1]) {
      sum += 1;
    } else {
      if (sum > 1) {
        res.push(sum);
        res.push(char);
        sum = 1;
      } else res.push(char);
    }
  });

  return res.join("");
}

module.exports = {
  encodeLine,
};
