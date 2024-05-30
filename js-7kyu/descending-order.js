/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

// My Solution:

/*
Convert to string, then array in order to sort each number in descending order
Place elements back into string then convert back to number
*/

function descendingOrder(n) {
  return Number(
    n
      .toString()
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// Other Solutions:

function descendingOrder(n) {
  return parseInt(String(n).split("").sort().reverse().join(""));
}

function descendingOrder(n) {
  return +n.toString().split("").sort().reverse().join("");
}
