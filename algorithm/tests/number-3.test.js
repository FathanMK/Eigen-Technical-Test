const countOccurences = require("../questions/number-3");

const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];

test("output expected is [1, 0, 2]", () => {
  expect(countOccurences(INPUT, QUERY)).toEqual([1, 0, 2]);
});
