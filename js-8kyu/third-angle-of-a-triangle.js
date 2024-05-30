/*
You are given two interior angles (in degrees) of a triangle.

Write a function to return the 3rd.

Note: only positive integers will be tested.
*/

// My Solution

/*
Triangle angles equal 180 degrees
*/

function otherAngle(a, b) {
  return 180 - a - b;
}

// Other Solutions:

const otherAngle = (a, b) => 180 - a - b;
