/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
 */

// My Solution:

// Convert string to array of numbers
// Retreive max and min
// Convert back to string with space

function highAndLow(numbers) {
  let numsArray = numbers.split(" ").map(Number);
  let max = Math.max(...numsArray);
  let min = Math.min(...numsArray);
  return [max, min].join(" ");
}

// Other Solutions:

function highAndLow(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

function highAndLow(numbers) {
  let arr = numbers.split(" ").map(Number);
  return Math.max(...arr) + " " + Math.min(...arr);
}
