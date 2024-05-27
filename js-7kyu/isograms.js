// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// My Solution:

/*
Convert all chars to lowercase, then find the number of unique chars
compare number of unique chars to length of string.
*/

function isIsogram(str) {
  let set = new Set(str.toLowerCase());
  return set.size === str.length;
}

// Other Solutions:

function isIsogram(str) {
  return new Set(str.toUpperCase()).size === str.length;
}

function isIsogram(str) {
  return !str || str.length === new Set(str.toLowerCase()).size;
}
