/*
An element is leader if it is greater than The Sum all the elements to its right side.

Task
Given an array/list [] of integers , Find all the LEADERS in the array.

Notes
Array/list size is at least 3 .
Array/list's numbers Will be mixture of positives , negatives and zeros
Repetition of numbers in the array/list could occur.
Returned Array/list should store the leading numbers in the same order in the original array/list .

Input >> Output Examples
arrayLeaders ({1, 2, 3, 4, 0}) ==> return {4}
Explanation:
4 is greater than the sum all the elements to its right side

Note : The last element 0 is equal to right sum of its elements (abstract zero).

arrayLeaders ({16, 17, 4, 3, 5, 2}) ==> return {17, 5, 2}
Explanation:
17 is greater than the sum all the elements to its right side

5 is greater than the sum all the elements to its right side

Note : The last element 2 is greater than the sum of its right elements (abstract zero).


*/

// My Solution:

/*
We can use a four loop to check if the current index is more than the sum of the remaining values
If so, push to arr, return arr

*/

function arrayLeaders(numbers) {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers.slice(i + 1).reduce((acc, c) => acc + c, 0))
      arr.push(numbers[i]);
  }
  return arr;
}

// Other Solutions:

const arrayLeaders = (numbers) => {
  return numbers.filter(
    (n, i) => n > numbers.slice(i + 1).reduce((a, b) => a + b, 0)
  );
};
