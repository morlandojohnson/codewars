/*
You need to design a recursive function called replicate which will receive arguments times and number.

The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

As tempting as it may seem, do not use loops to solve this problem.

*/

// My Solution:

function replicate(times, number) {
  if (times <= 0) {
    return [];
  } else {
    return [number].concat(replicate(times - 1, number));
  }
}

// Other Solutions:

function replicate(times, number) {
  return times > 0 ? [number, ...replicate(times - 1, number)] : [];
}

function replicate(times, number) {
  return times > 0 ? Array(times).fill(number) : [];
}
