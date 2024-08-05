/*
Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

For example:

([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
 */

// My Solution:

/*
We want to filter out the odd numbers
We want to return the array based on the number
The number will be the last even elements of the array

Using slice, we can set the start point based on this value

 */

function evenNumbers(array, number) {
  let evens = array.filter((el, i) => el % 2 === 0);
  return evens.slice(evens.length - number);
}

// Other Solutions:

const evenNumbers = (array, number) =>
  array.filter((item) => item % 2 === 0).slice(-number);

function evenNumbers(array, number) {
  let arr = [];
  for (let i = array.length - 1; number > 0; i--) {
    if (array[i] % 2 == 0) {
      arr.push(array[i]);
      number--;
    }
  }
  return arr.reverse();
}
