/*

You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

Your task is to return one of the following strings:

< firstName here >, < country here > of the first Python developer who has signed up; or
There will be no Python developers if no Python developer has signed up.
For example, given the following input array:

var list1 = [
  { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
  { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];
your function should return Victoria, Puerto Rico.


We can use find to find() the first match for python, store that object in a variable, then return a string that contains the first name and country in a template literal, otherwise return the string about there being no developers.

*/

// My Solution:

function getFirstPython(list) {
  const dev = list.find((item) => item.language === "Python");
  return dev
    ? `${dev.firstName}, ${dev.country}`
    : "There will be no Python developers";
}

// Other Solutions:

function getFirstPython(list) {
  for (let i = 0; i < list.length; ++i)
    if (list[i].language == "Python")
      return list[i].firstName + ", " + list[i].country;
  return "There will be no Python developers";
}
