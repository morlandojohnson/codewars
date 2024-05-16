// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// My Solution:

function getCount(str) {
  let count = 0;
  const vowels = "aeiou";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Other Solutions:

function getCount(str) {
  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}

function getCount(str) {
  let vowelsCount = 0;
  for (index in str) {
    switch (str[index]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vowelsCount++;
        break;
    }
  }
  return vowelsCount;
}
