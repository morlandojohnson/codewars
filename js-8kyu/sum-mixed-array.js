// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// My Solution:

function sumMix(x) {
  return x.reduce((a, b) => a + Number(b), 0);
}

// Other Solutions:

function sumMix(x) {
  return x.map((a) => +a).reduce((a, b) => a + b);
}

function sumMix(x) {
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += Number(x[i]);
  }
  return sum;
}

const sumMix = (arr) => arr.reduce((sum, n) => sum + +n, 0);
