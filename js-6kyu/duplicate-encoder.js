/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

// My Solution:

/*
Take in string, convert to lowercase and put into an array.
Create an object to hold key-value pairs to find repeated character
- if the value is repeated, increment the value
- if the value is not repeated, set to 1
Map the object into new array, 
- if the char value is 1 '('
- if the char value is more than 1 ')'
convert back to string
*/

function duplicateEncode(word) {
  let arr = word.toLowerCase().split("");
  let charMap = {};
  for (let char of arr) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  let encodedStr = arr
    .map((char) => {
      return charMap[char] > 1 ? ")" : "(";
    })
    .join("");
  return encodedStr;
}

// Other Solutions:

function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}
