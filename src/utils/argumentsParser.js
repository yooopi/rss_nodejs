const process = require("process");
const {
  ARGUMENTS_CONFIG,
  VALID_ARGUMENTS,
  REQUIRED_ARGUMENTS,
} = require("../configs/arguments.cfg");
const { validateConfig } = require("../configs/ciphers.cfg");
const { ArgumentRequiredError, ArgumentDuplicateError } = require("./errors");

exports.argumentsParser = () => {
  const args = process.argv.slice(2);

  // Renaming arguments for easier validation
  // ex. ['-i', '--output', '-c'] >> ['input', 'output', 'config']
  args.forEach((el, index, arr) => {
    ARGUMENTS_CONFIG.filter((item) => {
      if (item.alias === el || item.shortAlias === el) arr[index] = item.name;
    });
  });

  // Checking if required arguments are passed
  REQUIRED_ARGUMENTS.forEach((argument) => {
    if (!args.includes(argument)) throw new ArgumentRequiredError(argument);
  });

  // Transform array of arguments into object with unique keys
  // ex. ['input', './input.txt'] >> { input: "./input.txt" }
  const parsedArguments = args.reduce((value, item, index, arr) => {
    if (value.hasOwnProperty(item)) throw new ArgumentDuplicateError(item);

    if (VALID_ARGUMENTS.includes(item)) {
      value[item] = arr[index + 1];
    }

    return value;
  }, {});

  validateConfig(parsedArguments.config);

  return parsedArguments;
};
