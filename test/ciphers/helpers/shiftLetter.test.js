const { expect } = require("@jest/globals");
const shiftLetter = require("../../../src/ciphers/helpers/shiftLetter");

const mockData = {
  alphabet: "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",
  alphabetShiftedByOne: "BbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAa",
  alphabetShiftedByFive: "FfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzAaBbCcDdEe",
  alphabetShiftedByMinusOne:
    "ZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYy",
  alphabetShiftedByMinusFive:
    "VvWwXxYyZzAaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUu",
};

test("should return alphabet shifted by +1", () => {
  expect(shiftLetter(mockData.alphabet, 1)).toBe(mockData.alphabetShiftedByOne);
});

test("should return alphabet shifted by +5", () => {
  expect(shiftLetter(mockData.alphabet, -1)).toBe(
    mockData.alphabetShiftedByMinusOne
  );
});

test("should return alphabet shifted by -1", () => {
  expect(shiftLetter(mockData.alphabet, -1)).toBe(
    mockData.alphabetShiftedByMinusOne
  );
});

test("should return alphabet shifted by -5", () => {
  expect(shiftLetter(mockData.alphabet, -5)).toBe(
    mockData.alphabetShiftedByMinusFive
  );
});
