/*
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/

// My Solution:

/* My thought process: 

- Create an empty array
- If multiples of 3 & 5, push FizzBuzz
- If mutlitples of 3, push Fizz
- If multiples of 5, push Buzz
- Or else, push i 

*/

function fizzbuzz(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
}

// Other Solutions:

function fizzbuzz(n) {
  return [...Array(n + 1).keys()]
    .slice(1)
    .map((x) =>
      x % 15 === 0
        ? "FizzBuzz"
        : x % 3 === 0
        ? "Fizz"
        : x % 5 === 0
        ? "Buzz"
        : x
    );
}

const fizzbuzz = (n) =>
  Array.from({ length: n }, (_, i) => i + 1).map((el) =>
    el % 3 === 0 && el % 5 === 0
      ? "FizzBuzz"
      : el % 3 === 0
      ? "Fizz"
      : el % 5 === 0
      ? "Buzz"
      : el
  );
