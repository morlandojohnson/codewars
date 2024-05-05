// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9

// My Solution:

function SquareSum(numbers) {
  const squared = numbers.map((num) => Math.pow(num, 2));
  return squared.reduce((a, b) => a + b, 0);
}

// Other Solutions:

function squareSum(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}

function squareSum(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i] * numbers[i];
  }
  return result;
}

const squareSum = (numbers) => numbers.reduce((a, b) => a + b ** 2, 0);
