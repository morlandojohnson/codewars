/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

*/

// My Solution:

/*
loop through string
Push x, o to arrays
compare length of arrays
*/

function XO(str) {
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "x") {
      arr1.push(i);
    } else if (str[i].toLowerCase() === "o") {
      arr2.push(i);
    }
  }
  return arr1.length === arr2.length;
}

// Other Solution:
