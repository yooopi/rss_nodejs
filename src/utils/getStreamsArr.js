const { atbash, caesar, rot8 } = require("../streams/streamsGenerator");

// Get config array and return array of generated transform streams
// ['C1', 'R1, 'A'] >> [caesar("encode"), rot8("encode"), atbash()]
exports.getStreamsArr = (config) =>
  config.map((element) => {
    switch (element) {
      case "C0":
        return caesar("decode");
      case "C1":
        return caesar("encode");
      case "R0":
        return rot8("decode");
      case "R1":
        return rot8("encode");
      case "A":
        return atbash();
    }
  });
