/*

In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

The result should also be ordered from highest to lowest.

Examples:

[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []

first we need to test if the array is empty, is so, return empty array
if the array only has 1 item, return that one item
last we can filter out the duplicate numbers, sort in descending order then return index 0,1 using slice to return them.

*/

// My Solution:

function twoHighest(arr) {
  if (arr.length < 1) {
    return [];
  } else if (arr.length === 1) {
    return arr;
  } else {
    return arr
      .filter((item, index) => arr.indexOf(item) === index)
      .sort((a, b) => b - a)
      .slice(0, 2);
  }
}

// Other Solutions:

function twoHighest(arr) {
  return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2);
}
