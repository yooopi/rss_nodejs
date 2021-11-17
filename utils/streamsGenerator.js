const fs = require("fs");
const { constants } = require("fs");
const path = require("path");
const { stdin, stdout } = require("process");
const { Transform } = require("stream");
const { atbash, caesar, rot8 } = require("../ciphers");
const { CipherModerError, FileError } = require("./errors");

exports.readable = (path) => {
  try {
    if (path === undefined || !path) return stdin;

    fs.accessSync(path, constants.F_OK | constants.R_OK);
    return fs.createReadStream(path, { options: "r", encoding: "utf-8" });
  } catch {
    throw new FileError(path);
  }
};

exports.writable = (path) => {
  try {
    if (path === undefined || !path) return stdout;

    fs.accessSync(path, constants.F_OK | constants.W_OK);
    return fs.createWriteStream(path, { flags: "a+", encoding: "utf-8" });
  } catch {
    throw new FileError(path);
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
