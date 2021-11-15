// Each cipher implementation placed in ./ciphers/${name}.js
const CIPHERS = [
  { name: "Caesar", commands: ["C0", "C1"] },
  { name: "ROT-8", commands: ["R0", "R1"] },
  { name: "Atbash", commands: ["A"] },
];

exports.VALID_COMMANDS = CIPHERS.map((item) => {
  return item.commands;
}).flat();

exports.validateCiphersConfig = (str) => {
  const ciphers = str.split("-");
  ciphers.forEach((item) => {
    if (!this.VALID_COMMANDS.includes(item)) {
      process.stderr.write(`Wrong config, change cipher: ${item}\n`);
      process.exit(3);
    }
  });
};
