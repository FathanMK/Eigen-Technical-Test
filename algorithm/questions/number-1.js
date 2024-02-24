function reverseAlphabet(str) {
  const reverseStr = str.slice(0, -1).split("").reverse().join("");
  const result = reverseStr + str.charAt(str.length - 1);

  console.log(str);
  console.log(result);

  return result;
}

module.exports = reverseAlphabet;
