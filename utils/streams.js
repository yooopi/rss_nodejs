const fs = require("fs");
const { stderr, stdin, stdout } = require("process");
const { Transform } = require("stream");
const { atbash, caesar, rot8 } = require("../ciphers");

const modeError = (cipher) => {
  stderr.write(`Argument 'mode' is required for ${cipher} transform stream!\n`);
  process.exit(4);
};

exports.readable = (path) => {
  if (!path) return stdin;

  return fs.createReadStream(path, "utf-8");
};

exports.writeable = (path) => {
  if (!path) return stdout;

  return fs.createWriteStream(path, "utf-8");
};

exports.atbash = () =>
  new Transform({
    transform(chunk, encoding, callback) {
      res = atbash(chunk.toString());
      callback(null, res);
    },
  });

exports.caesar = (mode) =>
  new Transform({
    transform(chunk, encoding, callback) {
      if (!mode) modeError("caesar");

      chunkToString = chunk.toString();
      let res;

      mode === "encode"
        ? (res = caesar(chunkToString, "encode"))
        : (res = caesar(chunkToString, "decode"));

      callback(null, res);
    },
  });

exports.rot8 = (mode) =>
  new Transform({
    transform(chunk, encoding, callback) {
      if (!mode) modeError("rot8");

      chunkToString = chunk.toString();
      let res;

      mode === "encode"
        ? (res = rot8(chunkToString, "encode"))
        : (res = rot8(chunkToString, "decode"));

      callback(null, res);
    },
  });
