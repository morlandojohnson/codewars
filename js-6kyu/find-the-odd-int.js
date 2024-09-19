/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
 */

// My Solution:

/*
Only 1 int has odd occurance
We can use the reduce method to create an object. The key is the element, the value is the number of occurences.
We can then use Object.keys() to find the value that is odd and return that key.
We wrap it using Number to convert to int.

 */

function findOdd(a) {
  const obj = a.reduce((acc, c) => {
    acc[c] = (acc[c] || 0) + 1;
    return acc;
  }, {});
  return Number(Object.keys(obj).find((num) => obj[num] % 2 !== 0));
}

// Other Solutions:

function findOdd(arr) {
  return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
}

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);
