function longestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";

  for (const word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  console.log(sentence);
  console.log(longest);

  return longest;
}

module.exports = longestWord;
