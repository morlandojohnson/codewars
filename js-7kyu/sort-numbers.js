/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/

// My Solution:

/*
We need to check if nums is null or empty, if so return empty array, or else we return the sorted array.
*/

function solution(nums) {
  return nums !== null ? nums.sort((a, b) => a - b) : [];
}

// Other Solutions:

function solution(nums) {
  return (nums || []).sort(function (a, b) {
    return a - b;
  });
}

const solution = (nums) => (nums ? nums.sort((a, b) => a - b) : []);
