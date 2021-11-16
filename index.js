const { pipeline } = require("stream");
const fs = require('fs');
const { readable, writable } = require("./utils/streamsGenerator");
const { argumentsParser } = require("./utils/argumentsParser");
const { getStreamsFromConfig } = require("./utils/getStreamsArrFromConfig");
const { input, output, config } = argumentsParser();

const streamsArr = getStreamsFromConfig(config.split("-"));
// const writable = fs.createWriteStream(output, { options: "a+", encoding: "utf-8" })

pipeline(readable(input), ...streamsArr, writable(output), (err) => {
  if (err) {
    throw new Error(err.message);
  }
});
