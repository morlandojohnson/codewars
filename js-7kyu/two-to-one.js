/*

Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

// My Solution:

/*
Merge the two strings, remove any duplicates, sort alphabetically
Use set and concat to create an array that removes duplicates
Sort the array alpabetically and then put back into a string
*/

function longest(s1, s2) {
  return [...new Set(s1.concat(s2))].sort().join("");
}

// Other Solutions:

const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join("");

function longest(s1, s2) {
  let output = [];
  let combi = s1.concat(s2);
  let array = combi.split("").sort();

  for (let i = 0; i <= array.length; i++) {
    console.log(array[i]); //test
    if (!output.includes(array[i])) {
      output.push(array[i]);
    }
  }
  return output.join("");
}
