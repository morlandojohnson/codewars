/*

Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

*/

// My Solution:

/*
Spread operator to put string into an array
Filter 'n', then find length
If 15 or less, return 'Woohoo!'
If greater than 15, return 'Car Dead'
*/

function bump(x) {
  return [...x].filter((el) => el.includes("n")).length <= 15
    ? "Woohoo!"
    : "Car Dead";
}

// Other Solutions:

const bump = (x) => (x.split("n").length > 16 ? "Car Dead" : "Woohoo!");

const bump = (x) => {
  let string = "";
  for (let count = 0; count < x.length; count++) {
    if (x[count] == "n") {
      string += x[count];
    }
  }
  if (string.length > 15) {
    return "Car Dead";
  } else {
    return "Woohoo!";
  }
};
