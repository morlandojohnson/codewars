/*
Given an array/list [] of integers , Find the product of the k maximal numbers.

Notes
Array/list size is at least 3 .

Array/list's numbers Will be mixture of positives , negatives and zeros

Repetition of numbers in the array/list could occur.

Input >> Output Examples
maxProduct ({4, 3, 5}, 2) ==>  return (20)
Explanation:
Since the size (k) equal 2 , then the subsequence of size 2 whose gives product of maxima is 5 * 4 = 20 .

maxProduct ({8, 10 , 9, 7}, 3) ==>  return (720)
Explanation:
Since the size (k) equal 3 , then the subsequence of size 3 whose gives product of maxima is  8 * 9 * 10 = 720 .

*/

// My Solution:

/*
Poor description above
We want to return the value of the 3 biggest numbers
So, we want to sort the array in descending order, then multiple the values based on the size parameter

To do this, again we sort the array in descending order
We can then use the splice method to create an array with the values based on the size parameter
Then use reduce to multiple these values together.

*/

function maxProduct(numbers, size) {
  return numbers
    .sort((a, b) => b - a)
    .slice(0, size)
    .reduce((acc, c) => acc * c, 1);
}

// Other Solutions:

function maxProduct(numbers, size) {
  numbers = numbers.sort((a, b) => b - a);
  let result = 1;
  for (let i = 0; i < size; i++) {
    result *= numbers[i];
  }
  return result;
}

const maxProduct = (numbers, size) =>
  numbers
    .sort((a, b) => b - a)
    .reduce((pre, val, idx) => (idx < size ? pre * val : pre));
