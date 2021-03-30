const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool;
  }
  libr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  encrypt(message, key) {
    if (arguments.length < 2) {
      throw new Error("");
    }
    while (key.length <= message.length) {
      key += key;
    }
    key = key.toUpperCase();
    message = message.toUpperCase();
    let rezult = "";
    let jKey = 0;
    for (let i = 0; i < message.length; i++) {
      if (!this.libr.includes(message[i])) {
        rezult += message[i];
      } else {
        let codeLettersMes = this.libr.indexOf(message[i]);
        let codeLettersKey = this.libr.indexOf(key[jKey]);
        rezult += this.libr[(26 + codeLettersMes + codeLettersKey) % 26];
        jKey++;
      }
    }
    return this.bool ? rezult : rezult.split("").reverse().join("");
  }
  decrypt(message, key) {
    if (arguments.length < 2) {
      throw new Error("");
    }
    while (key.length <= message.length) {
      key += key;
    }
    key = key.toUpperCase();
    message = message.toUpperCase();
    let rezult = "";
    let jKey = 0;
    for (let i = 0; i < message.length; i++) {
      if (!this.libr.includes(message[i])) {
        rezult += message[i];
      } else {
        let codeLettersMes = this.libr.indexOf(message[i]);
        let codeLettersKey = this.libr.indexOf(key[jKey]);
        rezult += this.libr[(26 + codeLettersMes - codeLettersKey) % 26];
        jKey++;
      }
    }
    return this.bool ? rezult : rezult.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
