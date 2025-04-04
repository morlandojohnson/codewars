/*

Our fruit guy has a bag of fruit (represented as an array of strings) where some fruits are rotten. He wants to replace all the rotten pieces of fruit with fresh ones. For example, given ["apple","rottenBanana","apple"] the replaced array should be ["apple","banana","apple"]. Your task is to implement a method that accepts an array of strings containing fruits should returns an array of strings where all the rotten fruits are replaced by good ones.

Notes
If the array is null/nil/None or empty you should return empty array ([]).
The rotten fruit name will be in this camelcase (rottenFruit).
The returned array should be in lowercase.


we can use a for loop to determine if the word starts with 'rotten', if so we can push the word to a new array starting after rotten, else return the regular fruit.


*/

// My Solution:

function removeRotten(bagOfFruits) {
  let result = [];
  if (bagOfFruits) {
    for (let i = 0; i < bagOfFruits.length; i++) {
      let fruit = bagOfFruits[i];
      if (fruit.startsWith("rotten")) {
        result.push(fruit.substring(6).toLowerCase());
      } else {
        result.push(fruit.toLowerCase());
      }
    }
  }
  return result;
}

// Other Solutions:

function removeRotten(arr) {
  return arr ? arr.map((x) => x.replace("rotten", "").toLowerCase()) : [];
}

function removeRotten(bagOfFruits) {
  if (!bagOfFruits) {
    return [];
  }

  return bagOfFruits.map(function (fruit) {
    return fruit.replace("rotten", "").toLowerCase();
  });
}
