// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// My Solution:

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

// Other Solutions:

function simpleMultiplication(n) {
  return n * (n % 2 ? 9 : 8);
}

const simpleMultiplication = (n) => n * (n % 2 ? 9 : 8);
