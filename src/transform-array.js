const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("Invalid type");
  }
  let newArr = arr.slice();
  for (i = 0; i < newArr.length; i++) {
    if (newArr[i] === "--discard-next") {
      if (newArr[i + 1] === undefined || newArr[i + 2] === "--discard-prev") {
        newArr.splice(i, 1);
      } else {
        if (newArr[i + 2] === "--double-prev") {
          newArr.splice(i, 3);
        } else {
          newArr.splice(i, 2);
          i--;
        }
      }
    }
    if (newArr[i] === "--discard-prev") {
      if (newArr[i - 1] === undefined) {
        newArr.splice(i, 1);
      } else {
        newArr.splice(i - 1, 2);
        i--;
      }
    }
    if (newArr[i] === "--double-next") {
      if (newArr[i + 1] === undefined) {
        newArr.splice(i, 1);
      } else {
        newArr.splice(i, 1, newArr[i + 1]);
      }
    }
    if (newArr[i] === "--double-prev") {
      if (newArr[i - 1] === undefined) {
        newArr.splice(i, 1);
      } else {
        newArr.splice(i, 1, newArr[i - 1]);
      }
    }
  }
  return newArr;
};
