/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

*/

// My Solution:

function well(x) {
  let num = x.filter((word) => word === "good").length;
  return num === 0
    ? "Fail!"
    : num === 1 || num === 2
    ? "Publish!"
    : "I smell a series!";
}

// Other Solutions:

function well(x) {
  switch (x.filter((i) => i === "good").length) {
    case 0:
      return "Fail!";
    case 1:
    case 2:
      return "Publish!";
    default:
      return "I smell a series!";
  }
}

const well = (x) => {
  let count = x.filter((el) => el == "good").length;
  return count > 2 ? "I smell a series!" : count > 0 ? "Publish!" : "Fail!";
};
