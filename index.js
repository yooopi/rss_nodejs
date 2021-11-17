const fs = require("fs");
const { pipeline } = require("stream");
const { readable, writable } = require("./utils/streamsGenerator");
const { argumentsParser } = require("./utils/argumentsParser");
const { getStreamsFromConfig } = require("./utils/getStreamsArrFromConfig");
const { errorsHandler } = require("./utils/errorsHandler");

try {
  const { input, output, config } = argumentsParser();
  const streamsArr = getStreamsFromConfig(config.split("-"));
  
  pipeline(readable(input), ...streamsArr, writable(output), (err) => {
    if (err) throw new Error("Unknown eror");
  });
} catch (err) {
  errorsHandler(err);
}
