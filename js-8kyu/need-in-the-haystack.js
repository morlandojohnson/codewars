/*

Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

*/

// My Solution:

/*
Use find() to locate the needle in the array
Use indexOf() to locate the index in the return statement.
*/
function findNeedle(arr) {
  let needle = arr.find((value) => value === "needle");
  return `found the ${needle} at position ${arr.indexOf("needle")}`;
}

// or

function findNeedle(arr) {
  return `found the ${arr.find(
    (value) => value === "needle"
  )} at position ${arr.indexOf("needle")}`;
}

// Other Solutions:

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

const findNeedle = (haystack) =>
  `found the needle at position ${haystack.indexOf("needle")}`;

function findNeedle(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "needle") return "found the needle at position " + i;
  }
}
