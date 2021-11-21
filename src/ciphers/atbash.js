/* 
* This gonna work only with latin alphabet!
* n - i + 1
*  i - order of letter, ex. a = 1, z = 26
*  n - amount of letters in alphabet
*/

const { UPPER_CASE, LOWER_CASE, ALPHABET_LENGTH } = require("./helpers/constants");

module.exports = (txt) => {
  const arr = txt.split("");

  arr.forEach((el, index, arr) => {
    const code = el.charCodeAt();

    // upperCase
    if (UPPER_CASE.lowest <= code && code <= UPPER_CASE.highest) {
      arr[index] = String.fromCharCode(
        ALPHABET_LENGTH - (code - UPPER_CASE.lowest + 1) + UPPER_CASE.lowest
      );
    }

    // lowerCase
    if (LOWER_CASE.lowest <= code && code <= LOWER_CASE.highest) {
      arr[index] = String.fromCharCode(
        ALPHABET_LENGTH - (code - LOWER_CASE.lowest + 1) + LOWER_CASE.lowest
      );
    }
  });

  return arr.join("");
};
