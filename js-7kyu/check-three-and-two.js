/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"

*/

// My Solution:

/*
Create three variables, filter through the array each time to get length(number of occurrence)
Test conditional
*/

function checkThreeAndTwo(array) {
  let arr1 = array.filter((el) => el === "a").length;
  let arr2 = array.filter((el) => el === "b").length;
  let arr3 = array.filter((el) => el === "c").length;
  return (
    (arr1 === 3 || arr2 === 3 || arr3 === 3) &&
    (arr1 === 2 || arr2 === 2 || arr3 === 2)
  );
}

// Other Solutions:

function checkThreeAndTwo(arr) {
  let res = [];
  res.push(arr.filter((x) => x === "a").length);
  res.push(arr.filter((x) => x === "b").length);
  res.push(arr.filter((x) => x === "c").length);
  return res.includes(2) && res.includes(3);
}

function checkThreeAndTwo(array) {
  let t = { a: 0, b: 0, c: 0 };
  let a = array.map((x) => t[x]++);
  let y = Object.values(t);
  return y.includes(3) && y.includes(2);
}

function checkThreeAndTwo(array) {
  let countA = 0;
  let countB = 0;
  let countC = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "a") countA++;
    if (array[i] == "b") countB++;
    if (array[i] == "c") countC++;
  }
  return [countA, countB, countC].includes(3) &&
    [countA, countB, countC].includes(2)
    ? true
    : false;
}
