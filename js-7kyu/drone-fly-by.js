/*

The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

In this kata we will recreate that stunt... sort of.

You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

Return the resulting lamps string. See example tests for more clarity.

we can use indexOf to find the T in the drone string and store that in a variable (positon)
after this we can use repeat on 'o' to repeat the number (position times, we need to add + 1) as the + 1 is the current position of the drone

we can then use slice on the lamp string to the same positon and concat the two

fails test case of the drone string being longer than the lamp string
so we need to test if drone is longer than lamp, if so just replace string w/ o


*/

// My Solution:

function flyBy(lamps, drone) {
  let position = "T";
  let index = drone.indexOf(position);

  return drone.length > lamps.length
    ? lamps.replaceAll("x", "o")
    : "o".repeat(index + 1) + lamps.slice(index + 1);
}

// Other Solution:

const flyBy = (lamps, drone) => [...lamps].fill(`o`, 0, drone.length).join(``);

function flyBy(lamps, drone) {
  if (drone.length > lamps.length) return "o".repeat(lamps.length);
  return lamps.replace("x".repeat(drone.length), "o".repeat(drone.length));
}
