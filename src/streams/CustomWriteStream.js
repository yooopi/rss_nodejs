const { Writable } = require("stream");
const fs = require("fs");

class CustomWriteStream extends Writable {
  constructor(filename) {
    super();
    this.filename = filename;
  }

  _construct(cb) {
    fs.open(this.filename, "a", (err, fd) => {
      if (err) {
        cb(err);
      } else {
        this.fd = fd;
        cb();
      }
    });
  }

  _write(chunk, encoding, cb) {
    fs.write(this.fd, chunk, cb);
  }

  _destroy(err, cb) {
    if (this.fd) {
      fs.close(this.fd, (er) => cb(er || err));
    } else {
      cb(err);
    }
  }
}

exports.CustomWriteStream = (filename) => new CustomWriteStream(filename);
