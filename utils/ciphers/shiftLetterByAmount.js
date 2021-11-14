exports.shiftLetterByAmount = (txt, amount) => {
  const arr = txt.split("");

  arr.forEach((el, index, arr) => {
    const code = el.charCodeAt();

    // upperCase
    if (65 <= code && code <= 90) {
      arr[index] = String.fromCharCode(((code - 90 + amount) % 26) + 90);
    }

    // lowerCase
    if (97 <= code && code <= 122) {
      arr[index] = String.fromCharCode(((code - 97 + amount) % 26) + 97);
    }
  });

  return(arr.join(''))
};