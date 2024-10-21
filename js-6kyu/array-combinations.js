/*
In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.
 */

// My Solution:

/*
Remove the duplicates - set
multiple the length of subarray together - reduce
Return result - return
*/

function solve(arr) {
  return arr.reduce((acc, c) => a * new Set(c).size, 1);
}

// Other Solutons:

const solve = (a) => a.map((v) => new Set(v).size).reduce((v, w) => v * w, 1);

function solve(arr) {
  return arr
    .map((x) => x.filter((y, i) => x.indexOf(y) == i))
    .reduce((acc, val) => acc * val.length, 1);
}

function solve(arr) {
  return arr
    .map((a) => {
      let s = new Set();
      a.forEach((el) => s.add(el));
      return s.size;
    })
    .reduce((out, n) => out * n, 1);
}
