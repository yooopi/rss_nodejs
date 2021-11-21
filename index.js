const fs = require("fs");
const { pipeline } = require("stream");
const { readable, writable } = require("./src/streams/streamsGenerator");
const { argumentsParser } = require("./src/utils/argumentsParser");
const { getStreamsArr } = require("./src/utils/getStreamsArr");
const { errorsHandler } = require("./src/utils/errorsHandler");

try {
  const { input, output, config } = argumentsParser();
  const streamsArr = getStreamsArr(config.split("-"));
  
  pipeline(readable(input), ...streamsArr, writable(output), (err) => {
    if (err) throw new Error("Unknown eror");
  });
} catch (err) {
  errorsHandler(err);
}
