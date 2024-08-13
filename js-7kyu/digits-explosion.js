/*

Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

Examples
"312" should return "333122"
"102269" should return "12222666666999999999"


 */

// My Solution:

/*
We can split the string into an array
Using the map function, we can then loop through each element in the array to return that element based on the number of the element.
*/

function explode(s) {
  let str = "";
  arr = s.split("");
  arr.map((el) => {
    for (let i = 0; i < el; i++) {
      str += el;
    }
  });
  return str;
}

// Other Solutions:

function explode(s) {
  return s
    .split("")
    .map((e) => e.repeat(+e))
    .join("");
}

explode = (s) => [...s].map((n) => n.repeat(n)).join``;

function explode(s) {
  let arr = [];
  let split = s.split("");
  for (let item of s) {
    if (item == "1") {
      arr.push("1");
    } else if (item == "2") {
      arr.push("22");
    } else if (item == "3") {
      arr.push("333");
    } else if (item == "4") {
      arr.push("4444");
    } else if (item == "5") {
      arr.push("55555");
    } else if (item == "6") {
      arr.push("666666");
    } else if (item == "7") {
      arr.push("7777777");
    } else if (item == "8") {
      arr.push("88888888");
    } else if (item == "9") {
      arr.push("999999999");
    }
  }
  return arr.join("");
}
