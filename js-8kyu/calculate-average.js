/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

// My Solution

/* 
If array is more than 0, reduce array and div by length, or else return 0
*/

function findAverage(array) {
  return array.length > 0 ? array.reduce((a, b) => a + b, 0) / array.length : 0;
}

// Other Solutions:

function find_average(array) {
  if (array.length === 0) {
    return 0;
  }
  let result = 0;
  for (i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result / array.length;
}

const find_average = (array) =>
  array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;
