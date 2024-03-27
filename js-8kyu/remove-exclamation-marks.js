// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// My Solution:

function RemoveExclamationMarks(s) {
  return s.replaceAll("!", "");
}

// Other Solutions:

function RemoveExclamationMarks(s) {
  return s.split("!").join("");
}

const RemoveExclamationMarks = (s) => s.replaceAll("!", "");
