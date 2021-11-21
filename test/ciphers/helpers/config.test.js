const { expect } = require("@jest/globals");
const {
  ALPHABET_LENGTH,
  UPPER_CASE,
  LOWER_CASE,
} = require("../../../src/ciphers/helpers/constants");

test("Alphabet length should be 26", () => {
  expect(ALPHABET_LENGTH).toBe(26);
});

test("Lower case charCode should be: lowest = 97, highest = 122", () => {
    const { lowest, highest } = LOWER_CASE;
    expect(lowest).toBe(97)
    expect(highest).toBe(122)
});

test("Upper case charCode should be: lowest = 65, highest = 90 ", () => {
    const { lowest, highest } = UPPER_CASE;
    expect(lowest).toBe(65)
    expect(highest).toBe(90)
});

