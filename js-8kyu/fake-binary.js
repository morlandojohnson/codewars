/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

*/

// My Solution:

/*
Split string into array
convert to numbers
if below 5, return 0
if above 5, return 1
convert back to string
*/

function fakeBin(x) {
  let arr = x.split;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      result.push(0);
    } else {
      result.push(1);
    }
  }
  return result.join("");
}

console.log(fakeBin("45385593107843568"));
