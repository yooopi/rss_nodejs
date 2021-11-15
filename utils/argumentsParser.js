const {
  ARGUMENTS_CONFIG,
  VALID_ARGUMENTS,
} = require("../configs/arguments.cfg");
const process = require("process");
const {
  validateConfig,
  validateCiphersConfig,
} = require("../configs/ciphers.cfg");

module.exports = () => {
  const args = process.argv.slice(2);

  // Renaming arguments for easier validation
  // ex. ['-i', '--output', '-c'] >> ['input', 'output', 'config']
  args.forEach((el, index, arr) => {
    ARGUMENTS_CONFIG.filter((item) => {
      if (item.alias === el || item.shortAlias === el) arr[index] = item.name;
    });
  });

  if (!args.includes("config")) {
    process.stderr.write(
      `Missed required argument 'config'! Pass config as '-c' or '--config'\n`
    );
    process.exit(1);
  }

  // Transform array of arguments into object with unique keys
  // ex. ['input', './input.txt'] >> { input: "./input.txt" }
  const parsedArguments = args.reduce((value, item, index, arr) => {
    if (value.hasOwnProperty(item)) {
      process.stderr.write(`Duplicated arguemnt: ${item}\n`);
      process.exit(2);
    }

    if (VALID_ARGUMENTS.includes(item)) {
      value[item] = arr[index + 1];
    }

    return value;
  }, {});

  validateCiphersConfig(parsedArguments.config);

  return parsedArguments;
};
