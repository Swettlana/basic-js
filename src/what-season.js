const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (arguments.length === 0) {
    return "Unable to determine the time of year!";
  }
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw Error("Invalid date!");
  }
  try {
    date.valueOf();
  } catch {
    throw Error("Invalid date!");
  }

  let month = date.getMonth();
  const seasons = ["winter", "spring", "summer", "fall"];

  if (month === 11 || month === 0 || month === 1) {
    return seasons[0];
  }
  if (month === 2 || month === 3 || month === 4) {
    return seasons[1];
  }
  if (month === 5 || month === 6 || month === 7) {
    return seasons[2];
  }
  return seasons[3];
}

module.exports = {
  getSeason,
};
