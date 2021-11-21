const { expect } = require("@jest/globals");
const { rot8 } = require("../../src/ciphers");

const mockData = {
  alphabet: "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",
  alphabetRot8: "IiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEeFfGgHh",
  helloWorld: "Hello, World!",
  helloWorldRot8: "Pmttw, Ewztl!",
  kenny: "Oh my god, they killed Kenny!",
  kennyRot8: "Wp ug owl, bpmg sqttml Smvvg!",
};

describe("Rot8 encode", () => {
  test(`should return shifted by +1 alphabet`, () => {
    expect(rot8(mockData.alphabet, "encode")).toBe(mockData.alphabetRot8);
  });

  test(`should return ${mockData.helloWorldRot8}`, () => {
    expect(rot8(mockData.helloWorld, "encode")).toBe(mockData.helloWorldRot8);
  });

  test(`should return ${mockData.kennyRot8}`, () => {
    expect(rot8(mockData.kenny, "encode")).toBe(mockData.kennyRot8);
  });
});

describe("Rot8 decode", () => {
  test(`should return alphabet`, () => {
    expect(rot8(mockData.alphabetRot8, "decode")).toBe(mockData.alphabet);
  });

  test(`should return ${mockData.helloWorld}`, () => {
    expect(rot8(mockData.helloWorldRot8, "decode")).toBe(mockData.helloWorld);
  });

  test(`should return ${mockData.kenny}`, () => {
    expect(rot8(mockData.kennyRot8, "decode")).toBe(mockData.kenny);
  });
});
