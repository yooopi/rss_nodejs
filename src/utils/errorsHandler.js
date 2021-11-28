// Return human friendly error

const process = require("process");

exports.errorsHandler = (err) => {
  process.exitCode = 1;
  process.stderr.write(err.message + "\n");
  process.exit();
};