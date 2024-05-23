// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

// Examples:
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

// My Solution

function oddOrEven(array) {
  let arr = array.reduce((a, b) => a + b, 0);
  return arr % 2 === 0 ? "even" : "odd";
}

// Other Solutions:

function oddOrEven(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
}

function oddOrEven(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  if (result % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

const oddOrEven = (arr) =>
  arr.reduce((a, i) => a + i, 0) % 2 ? "odd" : "even";
