function countOccurrences(INPUT, QUERY) {
  const wordCount = {};
  INPUT.forEach((word) => {
    wordCount[word] = (wordCount[word] || 0) + 1;
  });

  const result = QUERY.map((word) => wordCount[word] || 0);

  console.log(`INPUT : ${INPUT}`);
  console.log(`QUERY : ${QUERY}`);
  console.log(result);

  return result;
}

module.exports = countOccurrences;
