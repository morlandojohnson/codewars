/*
DESCRIPTION:
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/

// My Solution:

// Map the array to return the index + 1: string as template literal

function number(array) {
  return array.map((str, n) => `${n + 1}: ${str}`);
}

// Other Solutions:

const number = (array) => array.map((n, i) => `${i + 1}: ${n}`);

function number(array) {
  let newArr = [];
  if (array.length === 0) {
    return [];
  } else {
    for (let i = 0; i < array.length; i++) {
      newArr.push(i + 1 + ": " + arr[i]);
    }
  }
}
