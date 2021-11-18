const fs = require("fs");
const { constants } = require("fs");
const { stdin, stdout } = require("process");
const { Transform } = require("stream");
const { atbash, caesar, rot8 } = require("../ciphers");
const { CipherModerError, FileError } = require("../utils/errors");
const { CustomReadStream } = require("./CustomReadStream");
const { CustomWriteStream } = require("./CustomWriteStream");

exports.readable = (filename) => {
  try {
    if (filename === undefined || !filename) return stdin;

    fs.accessSync(filename, constants.F_OK | constants.R_OK);
    return CustomReadStream(filename);
  } catch {
    throw new FileError(filename);
  }
};

exports.writable = (filename) => {
  try {
    if (filename === undefined || !filename) return stdout;

    fs.accessSync(filename, constants.F_OK | constants.W_OK);
    return CustomWriteStream(filename);
  } catch {
    throw new FileError(filename);
  }
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
      if (!mode) throw new CipherModerError("caesar");

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
      if (!mode) throw new CipherModerError("rot8");

      chunkToString = chunk.toString();
      let res;

      mode === "encode"
        ? (res = rot8(chunkToString, "encode"))
        : (res = rot8(chunkToString, "decode"));

      callback(null, res);
    },
  });
