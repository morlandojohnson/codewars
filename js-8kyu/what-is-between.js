// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// My Solution:

function between(a, b) {
  let arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

// Other Solutions:

const between = (a, b) => Array.from(new Array(b - a + 1), (_, i) => a + i);

function between(a, b) {
  return Array.from({ length: b - a + 1 }, (_, i) => a + i);
}
