/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/

// My Solution:

function shortcut(string) {
  return string
    .replaceAll("a", "")
    .replaceAll("e", "")
    .replaceAll("i", "")
    .replaceAll("o", "")
    .replaceAll("u", "");
}

// Other Solution:

function shortcut(string) {
  return string
    .split("")
    .filter((str) => !"aeiou".includes(str))
    .join("");
}

function shortcut(string) {
  let vowels = "aeiou";
  let output = "";
  for (let i = 0; i < string.length; i++) {
    if (!(vowels.indexOf(string[i]) > -1)) {
      output += string[i];
    }
  }
  return output;
}
