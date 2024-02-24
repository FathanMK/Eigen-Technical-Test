function diagonalDifference(matrix) {
  let diagonal1Sum = 0;
  let diagonal2Sum = 0;
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    diagonal1Sum += matrix[i][i];
    diagonal2Sum += matrix[i][n - 1 - i];
  }

  const result = Math.abs(diagonal1Sum - diagonal2Sum);

  console.log(matrix);
  console.log(`${diagonal1Sum} - ${diagonal2Sum}`);
  console.log(result);

  return result;
}

module.exports = diagonalDifference;
