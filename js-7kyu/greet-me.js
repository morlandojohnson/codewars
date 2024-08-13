/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
 */

// My Solution:

const greet = function (name) {
  return `Hello ${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}!`;
};

// Other Solutions:

greet = (n) => `Hello ${n[0].toUpperCase()}${n.substr(1).toLowerCase()}!`;
