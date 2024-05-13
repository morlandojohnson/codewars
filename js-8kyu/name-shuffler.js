// Example(Input --> Output)

// "john McClane" --> "McClane john"

// My Solution:

function nameShuffler(str) {
  return str.split(" ").reverse().join(" ");
}

// Other Solutins:

const nameShuffler = (str) => str.split(" ").reverse().join(" ");

function nameShuffler(str) {
  let arr = str.split(" ");
  return arr[1] + " " + arr[0];
}
