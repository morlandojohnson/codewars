/*

Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.

Examples:
[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3

*/

// My Solution:

/*
Sort the array
Loop through array, if element + 1 !== next index, return el + 1

Test case fail: expected 0 to equal 10
sortedArr[i] + 1 < 9

if sortedArr[i] + 1 > 9 ? 0 : sortedArr[i] + 1

*/

function getMissingElement(superImportantArray) {
  const sortedArr = superImportantArray.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] + 1 !== sortedArr[i + 1]) {
      return sortedArr[i] + 1 > 9 ? 0 : sortedArr[i] + 1;
    }
  }
}

// Other Solutions:

function getMissingElement(superImportantArray) {
  for (i = 0; i < 10; i++) {
    if (superImportantArray.indexOf(i) === -1) return i;
  }
}

function getMissingElement(a) {
  for (let i = 0; i < 10; i++) if (!a.includes(i)) return i;
}
