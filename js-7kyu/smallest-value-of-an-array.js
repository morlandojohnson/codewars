/*

Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

Some examples:

([1,2,3,4,5], "value") should return 1
([1,2,3,4,5], "index") should return 0


We need to check what toReturn is, we can create a conditional, if 'value' -> return the min value in the array
else if 'index' -> return the index of the min value of the array.

*/

// My Solution:

function min(arr, toReturn) {
  return toReturn === "value"
    ? Math.min(...arr)
    : arr.indexOf(Math.min(...arr));
}

// Other Solution:

function min(arr, toReturn) {
  if (toReturn == "value") {
    // return min value
    return Math.min(...arr);
  } else {
    return arr.indexOf(Math.min(...arr));
  }
}
