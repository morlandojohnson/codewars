/*
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)
Explanation:
The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
Explanation:
The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

rowWeights([80])  ==>  return (80, 0)
Explanation:
The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

*/

// My Solution:

/*
Array of numbers, needs to be split into two arrays, team 1, team 2
Alternate every other index 0 -> team 1, 1 -> team 2, 2 -> team 1, 3 -> team 2, etc
Sum team 1, sum team 2
return weight of team 1, team 2 in an array

We can use filter and % to determine if the index is even or odd, even goes to team 1, odd to team to
After this we can reduce each team to gather the sum and return the new array of [team1, team2]

We need to add conditional if array length is 1, push 0 to end of array to have two teams

*/

function rowWeights(array) {
  if (array.length === 1) array.push(0);
  let team1 = array.filter((el, i) => i % 2 === 0);
  let team2 = array.filter((el, i) => i % 2 !== 0);
  return [team1.reduce((acc, c) => acc + c), team2.reduce((acc, c) => acc + c)];
}

// Other Solution:

function rowWeights(array) {
  let t1 = array.filter((x, i) => i % 2 == 0).reduce((a, item) => a + item, 0);
  let t2 = array.filter((x, i) => i % 2 != 0).reduce((a, item) => a + item, 0);

  return [t1, t2];
}

function rowWeights(array) {
  return array.reduce(
    (t, x, i) => {
      t[i % 2] += x;
      return t;
    },
    [0, 0]
  );
}
