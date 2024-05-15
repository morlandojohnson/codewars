// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// My Solution:

function findShort(str) {
  return str.split(" ").reduce((a, b) <= (a.length <= b.length ? a : b)).length;
}

// Other Solutions:

function findShort(str) {
  return Math.min(...str.split(" ").map((str) => str.length));
}

const findShort = (s) =>
  s
    .split(" ")
    .sort((a, b) => b.length - a.length)
    .pop().length;
