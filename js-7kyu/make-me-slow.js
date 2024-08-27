/*
Make me slow! Calling makeMeSlow() should take at least 7 seconds.


*/

// My Solution:

function makeMeSlow() {
  // this function is too fast!
  for (let x = 0; x < 5500000000; x++) {}
}

// Other Solutions:

const makeMeSlow = () =>
  ((start) => {
    while (Date.now() - start < 7000);
  })(Date.now());
