/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
 */

// My Solution

/*
We want to split the string into an array, sort the array, then return to string, change to lowercase
Do this for both, then compare the two, same value?
 */

const isAnagram = function (test, original) {
  let str1 = test.toLowerCase().split("").sort().join("");
  let str2 = original.toLowerCase().split("").sort().join("");
  return str1 === str2;
};

// Other Solutions:

function isAnagram(test, original) {
  return (
    test.toLowerCase().split("").sort().join("") ===
    original.toLowerCase().split("").sort().join("")
  );
}

function isAnagram(str1, str2) {
  return sortWord(str1) == sortWord(str2);
}

function sortWord(word) {
  return word.toLowerCase().split("").sort().join("");
}
