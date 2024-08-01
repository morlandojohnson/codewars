/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.

*/

// My Solution:

/*
Array of integers
We need a conditional to check if the array is sorted
Print result if ascending, descending, or no if not sorted

Can we sort the array, check if matches the original array?
create copies of array, ascending and descending order
Use the .every() method to determine if they match, with conditional to return result
*/

function isSortedAndHow(array) {
  let asc = [...array].sort((a, b) => a - b);
  let desc = [...array].sort((a, b) => b - a);
  return asc.every((el, i) => el === array[i])
    ? "yes, ascending"
    : desc.every((el, i) => el === array[i])
    ? "yes, descending"
    : "no";
}

// Other Solutions:

function isSortedAndHow(arr) {
  return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1])
    ? "yes, ascending"
    : arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1])
    ? "yes, descending"
    : "no";
}

const isSortedAndHow = (array) => {
  let ascending = array.filter((e, i, a) => e > a[i + 1]).length == 0;
  let descending = array.filter((e, i, a) => e < a[i + 1]).length == 0;

  return ascending ? "yes, ascending" : descending ? "yes, descending" : "no";
};
