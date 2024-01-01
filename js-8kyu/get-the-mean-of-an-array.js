/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

*/

// My Solution:

/*
Use reduce to get the sum, divide by length, floor the number
*/

function getAverage(marks) {
  return Math.floor(marks.reduce((a, b) => a + b) / marks.length);
}

// Other Solutions:

const getAverage = (marks) =>
  Math.floor(marks.reduce((a, b) => a + b) / marks.length);

function getAverage(marks) {
  let sum = 0;

  for (let i in marks) sum += marks[i];

  return parseInt(sum / marks.length);
}
