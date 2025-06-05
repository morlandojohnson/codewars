/*

In this kata, you will do addition and subtraction on a given string. The return value must be also a string.

Note: the input will not be empty.

Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"

We can use replaceAll to change 'plus' to + and minus to -, then evaluate the equation, and change back to string
that would leave us with "1+2+3+4" or "1+2+3-4"



*/

// My Solution:

function calculate(str) {
  let updatedStr = str.replaceAll("plus", "+").replaceAll("minus", "-");
  return eval(updatedStr).toString();
}

// Other Solutions:

function calculate(str) {
  const sum = (arr) => (arr || [0]).reduce((acc, x) => acc + +x, 0);

  return (
    sum(str.match(/^\d+|(?<=plus)\d+/g)) - sum(str.match(/(?<=minus)\d+/g)) + ""
  );
}
