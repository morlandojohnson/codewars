/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.
*/

// My Solution:

/*
We want to create an array with two copies of str
First copy, even index is uppercase
Second copy, odd index is uppercase
Create two strings, map them to capitalize for even or odd
return array with both str
 */

function capitalize(s) {
  let str1 = s
    .split("")
    .map((letter, i) =>
      i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase()
    )
    .join("");
  let str2 = s
    .split("")
    .map((letter, i) =>
      i % 2 !== 0 ? letter.toUpperCase() : letter.toLowerCase()
    )
    .join("");
  return [str1, str2];
}

// Other Solutions:

function capitalize(s) {
  const odd = s
    .split("")
    .map((l, i) => (i % 2 !== 0 ? l.toUpperCase() : l))
    .join("");
  const even = s
    .split("")
    .map((l, i) => (i % 2 === 0 ? l.toUpperCase() : l))
    .join("");
  return [even, odd];
}

function capitalize(s) {
  return [0, 1].map((r) =>
    [...s].map((c, i) => (i % 2 === r ? c.toUpperCase() : c)).join("")
  );
}

const capitalize = (s) => {
  const arr = s.split("");
  let a = "",
    b = "";

  for (let i = 0; i < arr.length; i++) {
    if (i % 2) {
      a += arr[i];
      b += arr[i].toUpperCase();
    } else {
      a += arr[i].toUpperCase();
      b += arr[i];
    }
  }

  return [a, b];
};
