const shiftLetter = require("./helpers/shiftLetter");

module.exports = (txt, mode) => {
  if (mode === "encode") return shiftLetter(txt, 1);
  if (mode === "decode") return shiftLetter(txt, -1);
};
