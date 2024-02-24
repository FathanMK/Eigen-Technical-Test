const diagonalDifference = require("../questions/number-4");

const MATRIX = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

test("output expected to be 3", () => {
  expect(diagonalDifference(MATRIX)).toBe(3);
});
