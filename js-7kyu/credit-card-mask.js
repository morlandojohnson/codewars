/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"
 */

//  My Solution:

/*
Find out if str is longer than 4
If longer than 4, replace char with #, stop at -4.
Join w/ last 4
If shorter than 4, return str
*/

function maskify(cc) {
  return cc.length > 4 ? "#".repeat(cc.length - 4) + cc.substr(-4) : cc;
}

// Other Solutions:

function maskify(cc) {
  cc = cc.split("");
  for (let i = 0; i < cc.length - 4; i++) {
    cc[i] = "#";
  }

  cc = cc.join("");
  return cc;
}

function maskify(cc) {
  return "#".repeat(cc.slice(0, -4).length) + cc.slice(-4);
}
