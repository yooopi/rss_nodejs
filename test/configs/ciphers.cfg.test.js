//   const validateConfig = (str) => {
//     const commands = str.split("-");
//     commands.forEach((item) => {
//       if (!VALID_COMMANDS.includes(item)) throw new CipherConfigError(item);
//     });
//   };

const { expect } = require("@jest/globals");
const {
  CIPHERS,
  VALID_COMMANDS,
  validateConfig,
} = require("../../src/configs/ciphers.cfg");

const mockData = {
  ciphers: [
    { name: "Caesar", commands: ["C0", "C1"] },
    { name: "ROT-8", commands: ["R0", "R1"] },
    { name: "Atbash", commands: ["A"] },
  ],
  validCommands: ["C0", "C1", "R0", "R1", "A"],
  correctCfgExample: "C0-C1-R0-R1-A",
  incorrectCfgExample: "A0-C2-B3-W",
};

test("should be caesar, rot-8 and atbash ciphers", () => {
  expect(CIPHERS).toStrictEqual(mockData.ciphers);
});

test(`should contain "C0", "C1", "R0", "R1", "A"`, () => {
  expect(VALID_COMMANDS).toStrictEqual(mockData.validCommands);
});

test("should validate as correct", () => {
  expect(validateConfig(mockData.correctCfgExample)).toBeUndefined;
});

test("should throw error", () => {
  const { CipherConfigError } = require("../../src/utils/errors");
  expect(() => validateConfig(mockData.incorrectCfgExample)).toThrowError(
    new CipherConfigError("A0")
  );
});
