const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(bool = true) {
    this.bool = bool;
  }
  libr = "ABADEFGIJKLMNOPQRSTUVWXYZ";
  encrypt(message, key) {
    console.log(message, "+", key);
    if (arguments.length < 2) {
      throw new Error("");
    }
    // делаем строку с ключом == по длине  шифруемой  строке
    while (key.length <= message.length) {
      key += key;
    }
    //приводим к верхнему регистру строку и ключ
    key = key.slice(0, message.length + 1).toUpperCase();
    message = message.toUpperCase();
    let rezult = "";
    //клеем посимвольно результирующую строк
    for (let i = 0; i < message.length; i++) {
      if (!this.libr.includes(message[i])) {
        rezult += message[i];
      } else {
        let codeLettersMes = this.libr.indexOf(message[i]); //числовой код каждой буквы строки
        let codeLettersKey = this.libr.indexOf(key[i]);
        result += libr[(codeLettersMes + codeLettersKey) % 26];
      }
    }
    console.log(result);
    return this.bool ? rezult : rezult.split("").reverse().join("");
  }

  decrypt(message, key) {
    console.log(message, "+", key);
    if (arguments.length < 2) {
      throw new Error("");
    }
    while (key.length <= message.length) {
      key += key;
    }
    key = key.slice(0, message.length + 1).toUpperCase();
    message = message.toUpperCase();
    let rezult = "";
    for (let i = 0; i < message.length; i++) {
      if (!this.libr.includes(message[i])) {
        rezult += message[i];
      } else {
        let codeLettersMes = this.libr.indexOf(message[i]);
        let codeLettersKey = this.libr.indexOf(key[i]);
        result += libr[(codeLettersMes - codeLettersKey) % 26];
      }
    }
    console.log(rezult);
    return this.bool ? rezult : rezult.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
