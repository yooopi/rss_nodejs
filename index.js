const fs = require("fs");
const { pipeline } = require("stream");
const { readable, writable } = require("./streams/streamsGenerator");
const { argumentsParser } = require("./utils/argumentsParser");
const { getStreamsArr } = require("./utils/getStreamsArr");
const { errorsHandler } = require("./utils/errorsHandler");

try {
  const { input, output, config } = argumentsParser();
  const streamsArr = getStreamsArr(config.split("-"));
  
  pipeline(readable(input), ...streamsArr, writable(output), (err) => {
    if (err) throw new Error("Unknown eror");
  });
} catch (err) {
  errorsHandler(err);
}
