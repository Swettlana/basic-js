const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const resObj = {};
  domains
    .map((el) => el.split(".").reverse())
    .forEach((el) => {
      el.forEach((el1, index, arr) => {
        const key = ("." + arr.slice(0, index + 1)).replace(/,/g, ".");
        resObj[key] ? resObj[key]++ : (resObj[key] = 1);
      });
    });
  return resObj;
}

module.exports = {
  getDNSStats,
};
