// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// My Solution:

function getMiddle(s) {
  let length = s.length;
  let half = length / 2;
  console.log(length, half);
  if (length % 2 === 0) {
    return s.slice(half - 1, half + 1);
  } else {
    return s.slice(half, half + 1);
  }
}

// Other Solutions:

function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1)), s.length % 2 === 0 ? 2 : 1;
}

function getMiddle(s) {
  let middle = s.length / 2;
  return s.length % 2
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

function getMiddle(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}
