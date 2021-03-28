const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  console.log(date);

  if (arguments.length === 0) {
    return "Unable to determine the time of year!";
  }
  if (date === null || Date.parse(date) === NaN || typeof date !== "object") {
    throw Error("Invalid type");
  }
  let month = date.getMonth();
  let season;
  date.valueOf();
  switch (month) {
    case 11:
    case 0:
    case 1:
      season = "winter";
      break;
    case 2:
    case 3:
    case 4:
      season = "spring";
      break;
    case 5:
    case 6:
    case 7:
      season = "summer";
      break;
    default:
      season = "fall";
  }
  return season;
};
