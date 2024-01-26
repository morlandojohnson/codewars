/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.

Example
[4,3,9,7,2,1] -> [2,9,3,49,4,1]
Notes
The input array will always contain only positive numbers, and will never be empty or null.
 */

// My Solution:

/*
Map array to new array
Check if sqrt remainder is 1, sqrt isn't an int => square it, or else return sqrt
*/

function squareOrSquareRoot(array) {
  return array.map((x) => (Math.sqrt(x) % 1 ? Math.pow(x, 2) : Math.sqrt(x)));
}

// Other Solutions:

const squareOrSquareRoot = (array) =>
  array.map((a) => (Math.sqrt(a) % 1 == 0 ? Math.sqrt(a) : a * a));
