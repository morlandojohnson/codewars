/*
Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

Example(Input1, Input2 --> Output)
[1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
*/

// My Solution:

function divisibleBy(numbers, divisor) {
  return numbers.filter((el) => el % divisor === 0);
}

// Other Solutions:

const divisibleBy = (numbers, divisor) =>
  numbers.filter((number) => !(number % divisor));

function divisibleBy(numbers, divisor) {
  let newArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % divisor === 0) {
      newArr.push(numbers[i]);
    }
  }
  return newArr;
}
