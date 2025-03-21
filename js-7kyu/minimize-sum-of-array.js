/*

Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size

Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22

minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342

 */

// My Solution:

/*
Sort the array
Use the reduce method to take the current value, index 0 and combine w/ pop to multiple the last element
Pop will remove the last element, and then repeat this action through the array

*/

function minSum(arr) {
  return arr.sort((a, b) => a - b).reduce((acc, c) => acc + c * arr.pop(), 0);
}

// Other Solutions:

function minSum(arr) {
  let sum = 0;
  let array = [...arr].sort((a, b) => a - b);
  while (array.length) sum += array.pop() * array.shift();
  return sum;
}

function minSum(arr) {
  arr.sort((x, y) => x - y);
  s = 0;
  while (arr.length) s += arr.pop() * arr.shift();
  return s;
}
