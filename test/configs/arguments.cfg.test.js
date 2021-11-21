const { expect } = require("@jest/globals");
const {
  ARGUMENTS_CONFIG,
  VALID_ARGUMENTS,
  REQUIRED_ARGUMENTS,
} = require("../../src/configs/arguments.cfg");

const mockData = {
  argumentsConfig: [
    {
      name: "config",
      alias: "--config",
      shortAlias: "-c",
      isRequired: true,
      description: "smth",
    },
    {
      name: "input",
      alias: "--input",
      shortAlias: "-i",
      isRequired: false,
      description: "smth",
    },
    {
      name: "output",
      alias: "--output",
      shortAlias: "-o",
      isRequired: false,
      description: "smth",
    },
  ],
  validArguments: ["config", "input", "output"],
  requiredArguments: ["config"],
};

test("should be three arr of 3 object with keys: name, alias, shortAlias, isRequired, description", () => {
  expect(ARGUMENTS_CONFIG).toStrictEqual(mockData.argumentsConfig);
});

test("should be config, input, output", () => {
    expect(VALID_ARGUMENTS).toStrictEqual(mockData.validArguments);
});
  
test("should be config", () => {
    expect(REQUIRED_ARGUMENTS).toStrictEqual(mockData.requiredArguments);
});