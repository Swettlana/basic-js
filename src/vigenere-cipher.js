const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool;
    console.log(bool);
  }
  libr = "ABADEFGIJKLMNOPQRSTUVWXYZ";
  encrypt(message, key) {
    console.log(message, "+", key);
    if (arguments.length !== 2) {
      throw new Error();
    }
    let libr = this.libr.split("");
    let changeToNumbers = (str) => {
      return str
        .toUpperCase()
        .split("")
        .map((char) => {
          if (libr.includes(char)) {
            char = libr.indexOf(char);
          }
        });
    };
    while (message.length <= key.length) {
      key += key;
    }
    // заменяем символы соответсвующими цифрами
    let arrMessage = changeToNumbers(message);
    let arrKey = changeToNumbers(key);
    //получаем итоговую криптограмму
    let rezult = [],
      curr;
    for (let i = 0; i < arrMessage.length; i++) {
      // if (Number.isInteger(arrMessage[i])) {
      curr = arrMessage[i] + arrKey[i];
      // }
      curr > 26 ? (curr = curr - 26) : curr;
      rezult = rezult.push(libr[curr]);
    }
    return this.bool ? rezult.join("") : rezult.reverse().join("");
  }

  decrypt(message, key) {
    if (arguments.length !== 2) {
      throw new Error();
    }
    let libr = this.libr.split("");
    let changeToNumbers = (str) => {
      return str
        .toUpperCase()
        .split("")
        .map((char) => {
          if (libr.includes(char)) {
            char = libr.indexOf(char);
          }
        });
    };
    while (message.length <= key.length) {
      key += key;
    }
    // заменяем символы соответсвующими цифрами
    let arrMessage = changeToNumbers(message);
    let arrKey = changeToNumbers(key);
    //получаем итоговую криптограмму
    let rezult = [],
      curr;
    for (i = 0; i < arrMessage.length; i++) {
      if (Number.isInteger(arrMessage[i])) {
        curr = arrMessage[i] - arrKey[i];
      }
      curr < 0 ? (curr = curr + 26) : curr;
      rezult = rezult.push(libr[curr]);
    }
    return this.bool ? rezult.join("") : rezult.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
