const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let strOp = "",
    strRez,
    str2;
  let str1 = "" + options.addition;
  if (options.addition !== undefined) {
    if (!options.additionRepeatTimes) {
      strOp = str1;
    } else {
      options.additionSeparator === undefined
        ? (strOp = (str1 + "|")
            .repeat(options.additionRepeatTimes)
            .slice(0, -1))
        : (strOp = (str1 + options.additionSeparator)
            .repeat(options.additionRepeatTimes)
            .slice(0, -options.additionSeparator.length));
    }
  }
  str2 = "" + str + strOp;
  if (!options.repeatTimes) {
    strRez = str2;
  } else {
    options.separator === undefined
      ? (strRez = (str2 + "+").repeat(options.repeatTimes).slice(0, -1))
      : (strRez = (str2 + options.separator)
          .repeat(options.repeatTimes)
          .slice(0, -options.separator.length));
  }
  return strRez;
};
