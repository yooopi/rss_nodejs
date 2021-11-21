const { expect } = require("@jest/globals");
const { caesar } = require("../../src/ciphers");

const mockData = {
  alphabet: "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",
  alphabetCaesar: "BbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAa",
  helloWorld: "Hello, World!",
  helloWorldCaesar: "Ifmmp, Xpsme!",
  kenny: "Oh my god, they killed Kenny!",
  kennyCaesar: "Pi nz hpe, uifz ljmmfe Lfooz!",
};

describe("Caesar encode", () => {
  test(`should return alphabet shifted by +1`, () => {
    expect(caesar(mockData.alphabet, "encode")).toBe(mockData.alphabetCaesar);
  });

  test(`should return ${mockData.helloWorldCaesar}`, () => {
    expect(caesar(mockData.helloWorld, "encode")).toBe(
      mockData.helloWorldCaesar
    );
  });

  test(`should return ${mockData.kennyCaesar}`, () => {
    expect(caesar(mockData.kenny, "encode")).toBe(mockData.kennyCaesar);
  });
});

describe("Caesar decode", () => {
  test(`should return alphabet`, () => {
    expect(caesar(mockData.alphabetCaesar, "decode")).toBe(mockData.alphabet);
  });

  test(`should return ${mockData.helloWorld}`, () => {
    expect(caesar(mockData.helloWorldCaesar, "decode")).toBe(
      mockData.helloWorld
    );
  });

  test(`should return ${mockData.kenny}`, () => {
    expect(caesar(mockData.kennyCaesar, "decode")).toBe(mockData.kenny);
  });
});
