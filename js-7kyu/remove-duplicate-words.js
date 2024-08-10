/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:

'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:

'alpha beta gamma delta'
*/

// My Solution:

/*
Convert the string into an array
We can use [...new Set()] to remove any duplicate items from the array
Convert back to string.
*/

function removeDuplicateWords(s) {
  let arr = s.split(" ");
  return [...new Set(arr)].join(" ");
}

// Other Solutions:

function removeDuplicateWords(s) {
  return [...new Set(s.split(" "))].join(" ");
}

function removeDuplicateWords(s) {
  return s
    .split(" ")
    .filter((n, i, s) => {
      return s.indexOf(n) === i;
    })
    .join(" ");
}
