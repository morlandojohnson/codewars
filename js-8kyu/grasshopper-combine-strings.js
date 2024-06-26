/*
Combine strings function
Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

Example:

combineNames('James', 'Stevens')
returns:

'James Stevens'
*/

// My solution:

function combineNames(str1, str2) {
  return `${str1} ${str2}`;
}

// Other Solutions:

const combineNames = (...names) => names.join(" ");

let combineNames = function (first, last) {
  return first + " " + last;
};
