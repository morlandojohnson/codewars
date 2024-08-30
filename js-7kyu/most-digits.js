/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.



 */

// My Solution:

/*
We can sort the array and return the first element
 */

function findLongest(array) {
  return array.reduce((a, b) => (`${b}`.length > `${a}`.length ? b : a));
}

// Other Solutions:

function findLongest(array) {
  return array.reduce((res, curr) =>
    String(res).length < String(curr).length ? curr : res
  );
}

function findLongest(arr) {
  const l = arr.map((x) => String(x).length);
  return arr[l.indexOf(Math.max(...l))];
}
