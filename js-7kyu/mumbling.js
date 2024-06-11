/*
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.
 */

// My Solution:

/*
Loop through the string
Capitalize each letter(first one)
Duplicate the letter based on its index
insert - between each new letter
*/

function accum(s) {
  let str = "";
  for (let i = 0; i <= s.length - 1; i++) {
    str += s[i].toUpperCase() + s[i].repeat(i).toLowerCase() + "-";
  }
  return str.slice(0, -1);
}

// Other Solutions:

function accum(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}
