// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

// My Solution:

function remove(str) {
  if (str.charAt(str.length - 1).includes("!")) {
    return str.slice(0, -1);
  } else {
    return str;
  }
}

// Other Solutions:

function remove(s) {
  return s.endsWith("!") ? s.slice(0, -1) : s;
}

function remove(s) {
  return s[s.length - 1] == "!" ? s.slice(0, -1) : s;
}
