/*

Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1

 Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left side wins!

*/

// My Solution:

function alphabetWar(fight) {
  let num = [...fight].reduce(
    (acc, c) => acc + (("wpbs zdqm".indexOf(c) - 4) % 5),
    0
  );
  return num < 0
    ? "Left side wins!"
    : num > 0
    ? "Right side wins!"
    : "Let's fight again!";
}

// Other Solutions:

function alphabetWar(fight) {
  let map = { w: -4, p: -3, b: -2, s: -1, m: 4, q: 3, d: 2, z: 1 };
  let result = fight.split("").reduce((a, b) => a + (map[b] || 0), 0);
  return result
    ? (result < 0 ? "Left" : "Right") + " side wins!"
    : "Let's fight again!";
}

function alphabetWar(fight) {
  let score = 0;
  for (const letter of fight) {
    switch (letter) {
      case "w":
        score -= 4;
        break;
      case "p":
        score -= 3;
        break;
      case "b":
        score -= 2;
        break;
      case "s":
        score -= 1;
        break;
      case "m":
        score += 4;
        break;
      case "q":
        score += 3;
        break;
      case "d":
        score += 2;
        break;
      case "z":
        score += 1;
        break;
    }
  }

  return score < 0
    ? "Left side wins!"
    : score > 0
    ? "Right side wins!"
    : "Let's fight again!";
}
