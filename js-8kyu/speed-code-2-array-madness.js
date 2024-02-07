/*
Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

E.g.

arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
 */

// My Solution:

// Reduce each array, a squared, b cubed
// Compare array, will return true if correct

function arrayMadness(a, b) {
  return (
    a.reduce((acc, c) => acc + Math.pow(c, 2), 0) >
    b.reduce((acc, c) => acc + Math.pow(c, 3), 0)
  );
}

// Other Solutions:

const arrayMadness = (a, b) =>
  a.reduce((acc, x) => acc + x ** 2, 0) > b.reduce((acc, x) => acc + x ** 3, 0);
