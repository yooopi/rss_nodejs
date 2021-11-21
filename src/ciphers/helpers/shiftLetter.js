const { UPPER_CASE, LOWER_CASE } = require("./constants");

module.exports = (txt, amount) => {
  const arr = txt.split("");

  arr.forEach((el, index, arr) => {
    let code = el.charCodeAt();

    // upperCase
    if (UPPER_CASE.lowest <= code && code <= UPPER_CASE.highest) {
      if (code + amount > UPPER_CASE.highest) {
        code = code + amount - UPPER_CASE.highest + UPPER_CASE.lowest - 1;
      } else if (code + amount < UPPER_CASE.lowest) {
        code = code + amount - UPPER_CASE.lowest + UPPER_CASE.highest + 1;
      } else {
        code = code + amount;
      }
      arr[index] = String.fromCharCode(code);
    }

    // lowerCase
    if (LOWER_CASE.lowest <= code && code <= LOWER_CASE.highest) {
      if (code + amount > LOWER_CASE.highest) {
        code = code + amount - LOWER_CASE.highest + LOWER_CASE.lowest - 1;
      } else if (code + amount < LOWER_CASE.lowest) {
        code = code + amount - LOWER_CASE.lowest + LOWER_CASE.highest + 1;
      } else {
        code = code + amount;
      }
      arr[index] = String.fromCharCode(code);
    }
  });

  return arr.join("");
};
