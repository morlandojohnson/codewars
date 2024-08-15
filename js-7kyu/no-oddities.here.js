/*

Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.



*/

// My Solution:

/*
Use filter to return even elements in array.

*/

function noOdds(values) {
  return values.filter((el, i) => el % 2 === 0);
}

// Other Solutions:
