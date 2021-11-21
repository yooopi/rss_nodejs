const { CipherConfigError } = require("../utils/errors");

// Each cipher implementation placed in ./ciphers/${name}.js
const CIPHERS = [
  { name: "Caesar", commands: ["C0", "C1"] },
  { name: "ROT-8", commands: ["R0", "R1"] },
  { name: "Atbash", commands: ["A"] },
];

const VALID_COMMANDS = CIPHERS.map((item) => {
  return item.commands;
}).flat();

const validateConfig = (str) => {
  const commands = str.split("-");
  commands.forEach((item) => {
    if (!VALID_COMMANDS.includes(item)) throw new CipherConfigError(item);
  });
};

module.exports = {
  CIPHERS,
  VALID_COMMANDS,
  validateConfig,
}