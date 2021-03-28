const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false;
  }
  if (sampleActivity.trim().length === 0) {
    return false;
  }
  let n = parseFloat(sampleActivity);
  if (n <= 0 || n > MODERN_ACTIVITY || isNaN(n) || arguments.length === 0) {
    return false;
  }
  let k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY / n) / k);
};
