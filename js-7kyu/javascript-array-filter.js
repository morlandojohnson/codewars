/*
JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]

*/

// My Solution:

/*
Filter out odd numbers
*/

function getEvenNumbers(numbersArray) {
  return numbersArray.filter((number) => number % 2 === 0);
}

// Other Solutions:

const getEvenNumbers = (numbersArray) =>
  numbersArray.filter((num) => num % 2 == 0);
