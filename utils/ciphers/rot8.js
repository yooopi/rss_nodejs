const { shiftLetterByAmount } = require("./shiftLetterByAmount");

exports.rot8 = (txt, mode) => {
  if (mode === "encode") return shiftLetterByAmount(txt, 8);
  if (mode === "decode") return shiftLetterByAmount(txt, -8);
};