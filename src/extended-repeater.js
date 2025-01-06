const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const addRepeat = (
    (options.hasOwnProperty("addition") ? options.addition + "" : "") +
    (options.additionSeparator || "|")
  )
    .repeat(options.additionRepeatTimes ? options.additionRepeatTimes : 1)
    .slice(
      0,
      options.additionSeparator ? -options.additionSeparator.length : -1
    );

  return (str + addRepeat + (options.separator || "+"))
    .repeat(options.repeatTimes ? options.repeatTimes : 1)
    .slice(0, options.separator ? -options.separator.length : -1);
}

module.exports = {
  repeater,
};
