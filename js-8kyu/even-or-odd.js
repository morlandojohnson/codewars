// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// My Solution:

function evenOrOdd(number) {
  return number % 2 ? "Odd" : "Even";
}

// Other Solutions:

function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

function evenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
