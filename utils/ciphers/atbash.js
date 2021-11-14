/* 
This gonna work only with latin alphabet!

n - i + 1

i - order of letter, ex. a = 1, z = 26
n - amount of letters in alphabet

*/

const atbash = (txt) => {
  const arr = txt.split("");

  console.log("BEFORE: ", arr);

  arr.forEach((el, index, arr) => {
    const code = el.charCodeAt();

    // upperCase
    if (65 <= code && code <= 90) {
      arr[index] = String.fromCharCode(26 - (code - 64) + 65);
    }

    // lowerCase
    if (97 <= code && code <= 122) {
      arr[index] = String.fromCharCode(26 - (code - 96) + 97);
    }
  });

  return arr.join("");
};
