/*
A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

function main [verb, noun]
  return verb + noun
}
*/

// My Solution:

function main(verb, noun) {
  return [verb, noun].join("");
}

// Other Solutions:

function main(verb, noun) {
  return verb + noun;
}

function main(verb, noun) {
  if (arguments.length > 1) return verb.trim() + " " + noun.trim();
}
