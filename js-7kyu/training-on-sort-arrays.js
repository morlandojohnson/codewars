/*

Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.



*/

// My Solution:

/*
Just sort the names in alphabetical order.
*/

sortme = function (names) {
  return names.sort();
};

// Other Solutions:

sortme = (names) => names.sort();

sortme = function (names) {
  return names.sort(function (a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  });
};
