/*
As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.
*/

// My Solution:

/*
Map original array to object, holding value and index
Sort the object values from low to high
Grab the index value from middle element, index value keeps original position
*/

function gimme(triplet) {
  const arr = triplet.map((value, index) => ({ value, index }));
  console.log(arr);
  console.log(arr.sort((a, b) => a.value - b.value));
  const middle = arr[1];
  return middle.index;
}

// Other Solutions:

function gimme(a) {
  return a.indexOf(
    a.concat().sort(function (a, b) {
      return a - b;
    })[1]
  );
}

const gimme = function (arr) {
  return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
};
