/*

You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

lst contains integers, that means it may contain some negative numbers
if lst is empty or contains a single element, return 0
lst is not sorted
[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7


We can sort the array in ascending order
If the length of the array is 1 or less, we'll return 0 as there is no difference between the smallest/largest value
Else we'll return the difference between the last and first index

*/

// My Solution:

function maxDiff(list) {
  let sorted = list.sort((a, b) => a - b);
  return sorted.length <= 1 ? 0 : sorted[sorted.length - 1] - sorted[0];
}

// Other Solutions:

function maxDiff(list) {
  return list.length > 1 ? Math.max(...list) - Math.min(...list) : 0;
}

function maxDiff(list) {
  if (!list.length) return 0;
  return Math.max(...list) - Math.min(...list);
}
