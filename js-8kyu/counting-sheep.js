/*

Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

*/

// My Solution:

// How many times does true occur in the array - filter through array to return occurences of true

function countSheeps(sheep) {
  return sheep.filter((value) => value === true).length;
}

// Other Solutions:

function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

function countSheeps(arrayOfSheep) {
  let num = 0;

  for (let i = 0; i < arrayOfSheep.length; i++)
    if (arrayOfSheep[i] == true) num++;

  return num;
}

const countSheeps = (arrayOfSheeps) => arrayOfSheeps.filter((s) => s).length;
