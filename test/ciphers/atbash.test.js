const { expect } = require("@jest/globals");
const { atbash } = require("../../src/ciphers");

const mockData = {
  alphabet: "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",
  alphabetMirrored: "ZzYyXxWwVvUuTtSsRrQqPpOoNnMmLlKkJjIiHhGgFfEeDdCcBbAa",
  helloWorld: "Hello, World!",
  helloWorldMirrored: "Svool, Dliow!",
  kenny: "Oh my god, they killed Kenny!",
  kennyMirrored: "Ls nb tlw, gsvb proovw Pvmmb!",
};

test(`should return mirrored alphabet`, () => {
  expect(atbash(mockData.alphabet)).toBe(mockData.alphabetMirrored);
});

test(`should return ${mockData.helloWorldMirrored}`, () => {
    expect(atbash(mockData.alphabet)).toBe(mockData.alphabetMirrored);
});
  
test(`should return mirrored ${mockData.kennyMirrored}`, () => {
    expect(atbash(mockData.alphabet)).toBe(mockData.alphabetMirrored);
  });