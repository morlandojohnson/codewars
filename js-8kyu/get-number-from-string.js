/*
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:

getNumberFromString(s)
 */

// My Solution:
/*
We can split the string into an array of elements
Using filter we can filter out all characters that are not between 0 - 9
Use join to return the array into a string
Use Number() to convert back into a number.
 */

function getNumberFromString(s) {
  return Number(
    s
      .split("")
      .filter((el) => el >= "0" && el <= "9")
      .join("")
  );
}

// Other Solution:

function getNumberFromString(s) {
  // use includes method
  let result = "";
  let digits = "0123456789";
  for (let i = 0; i < s.length; i++) {
    if (digits.includes(s[i])) {
      result += s[i];
    }
  }
  return Number(result);
}

const getNumberFromString = (s) =>
  parseInt(
    s
      .split("")
      .filter((x) => "0123456789".includes(x))
      .join("")
  );
