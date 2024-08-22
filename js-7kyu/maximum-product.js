/*

Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

Input >> Output Examples
adjacentElementsProduct([1, 2, 3]); ==> return 6
Explanation:
The maximum product obtained from multiplying 2 * 3 = 6, and they're adjacent numbers in the array.

adjacentElementsProduct([9, 5, 10, 2, 24, -1, -48]); ==> return 50
Explanation:
Max product obtained from multiplying 5 * 10  =  50 .

*/

// My Solution:

/*
Multiple each element by the adjacent element.
Return the max number


*/

function adjacentElementsProduct(array) {
  let newArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    newArr.push(array[i] * array[i + 1]);
  }
  return Math.max(...newArr);
}

// Other Solutions:

function adjacentElementsProduct(a) {
  return Math.max(...a.map((x, i) => x * a[i + 1]).slice(0, -1));
}
