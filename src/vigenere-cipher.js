const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  dictionary = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  numberLetters = 26;

  constructor(direction) {
    this.direction = direction;
  }

  deleteNotLetters(word) {
    const re = /[^A-Z]/g;
    return word.replace(re, "");
  }

  machine(message, key, direction) {
    if (arguments.length < 2 || !message || !key) {
      throw Error("Incorrect arguments!");
    }

    const newMessage = message.toUpperCase();
    const newKey = key.toUpperCase();
    const messageTransform = this.deleteNotLetters(newMessage);
    const strKey = "".padStart(messageTransform.length, newKey);
    const resArrayLetters = [];
    let indexKey = 0;

    newMessage.split("").forEach((letter) => {
      if (this.dictionary.includes(letter)) {
        let indMessage = this.dictionary.indexOf(letter);
        let indKey = this.dictionary.indexOf(strKey[indexKey]);
        indexKey++;
        let indRes = direction
          ? (indMessage + indKey) % this.numberLetters
          : (indMessage - indKey + this.numberLetters) % this.numberLetters;
        resArrayLetters.push(this.dictionary[indRes]);
      } else {
        resArrayLetters.push(letter);
      }
    });

    const result =
      this.direction === false
        ? resArrayLetters.reverse().join("")
        : resArrayLetters.join("");

    return result;
  }

  encrypt(message, key) {
    return this.machine(message, key, true);
  }

  decrypt(message, key) {
    return this.machine(message, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine,
};
