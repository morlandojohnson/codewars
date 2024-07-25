/*

"abcde" + "cdefgh" => "abcdefgh"
"abaab" + "aabab" => "abaabab"
"abc" + "def" => "abcdef"
"abc" + "abc" => "abc"
NOTE: The algorithm should always use the longest possible overlap.

"abaabaab" + "aabaabab" would be "abaabaabab" and not "abaabaabaabab"

*/

// My Solution:

/*
Create a loop to check the string
If the string contains the start of the second string
Stop the loop, create a substring from 0 to i
Concat two strings

*/

function mergeStrings(first, second) {
  for (let i = 0; i < first.length; i++) {
    const overlap = first.substring(i);
    if (second.startsWith(overlap)) return first.substring(0, i) + second;
  }
  return first + second;
}

// Other Solutions:

function mergeStrings(first, second) {
  let count = 0;

  for (let i = 0; i < first.length; i++) {
    if (first[i] == second[count]) {
      count++;
    } else {
      count = 0;
      if (first[i] == second[count]) count++;
    }
  }

  return first + second.slice(count);
}

function mergeStrings(first, second) {
  for (let i = 0; i < first.length; i++)
    if (second.startsWith(first.substring(i)))
      return first + second.substring(first.length - i);
  return first + second;
}
