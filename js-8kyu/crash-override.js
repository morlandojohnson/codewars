/*

Your task is to create a function that, given a proper first and last name, will return the correct alias.

Notes:
Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.

If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."

Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.

Examples
// These two objects are preloaded, you need to use them in your code
var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

First we can determine if the first or last name a number by using parseInt and !isNaN to determine if its a number. If so we need to return our prompt.
Otherwise we can return a template string that provides the value from the key taken from the first name provided as well as the last need. We also need to make sure its uppercase.

*/

// My Solution:

function aliasGen(first, last) {
  return !isNaN(parseInt(first)) || !isNaN(parsInt(last))
    ? "Your name must start with a letter from A - Z."
    : `${firstName[first[0].toUpperCase()]} ${surname[last[0].toUpperCase()]}`;
}

// Other Solutions:

function aliasGen(first, last) {
  let auxFirst = first[0].toUpperCase();
  let auxLast = last[0].toUpperCase();

  if (firstName[auxFirst] && surname[auxLast]) {
    return firstName[auxFirst] + " " + surname[auxLast];
  } else {
    return "Your name must start with a letter from A - Z.";
  }
}

const aliasGen = (first, last) => {
  let charFirst = first[0].toUpperCase();
  let charLast = last[0].toUpperCase();
  if (Number(charFirst) || Number(charLast)) {
    return "Your name must start with a letter from A - Z.";
  } else return `${firstName[charFirst]} ${surname[charLast]}`;
};
