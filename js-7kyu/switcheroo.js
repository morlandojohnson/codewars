/*
Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb'
 */

// My Solution:

/*
We can convert the string to an array, then use map to iterate through the array to replace 'a' with 'b' and vice versa.
We can then use join() to convert back to string. 
*/

function switcheroo(x) {
  return x
    .split("")
    .map((el) => (el === "a" ? "b" : el === "b" ? "a" : el))
    .join("");
}

// Other Solutions:

function switcheroo(x) {
  let str = "";
  for (var i = 0; i < x.length; i++) {
    if (x[i] === "a") {
      str += "b";
    } else if (x[i] === "b") {
      str += "a";
    } else {
      str += x[i];
    }
  }
  return str;
}
