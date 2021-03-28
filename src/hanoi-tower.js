const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const hourInSecond = 3600;
  let object = {};
  let turn = Math.pow(2, disksNumber) - 1;
  let time = Math.floor((hourInSecond * turn) / turnsSpeed);
  object.turns = turn;
  object.seconds = time;
  return object;
};
