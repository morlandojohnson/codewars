/*

You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

Your function will accept three arguments:
The first and second argument should be numbers.
The third argument should represent a sign indicating the operation to perform on these two numbers.

if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

Example:
arguments: 1, 2, "+"
should return 3

arguments: 1, 2, "&"
should return "unknown value"

arguments: 1, "k", "*"
should return "unknown value"

We need to return the solution of the equation.
If any value for a or b is not a number, we need to return 'unknown value'
Also if any operator is not +, -, *, / we need to return 'unknown value'
Otherwise return the value

*/

// My Solution:

function calculator(a, b, sign) {
  if (sign === "+" && typeof a === "number" && typeof b === "number")
    return a + b;
  if (sign === "-" && typeof a === "number" && typeof b === "number")
    return a - b;
  if (sign === "*" && typeof a === "number" && typeof b === "number")
    return a * b;
  if (sign === "/" && typeof a === "number" && typeof b === "number")
    return a / b;
  else return "unknown value";
}

// Other Solutions:

function calculator(a, b, sign) {
  if (typeof a === "number" && typeof b === "number") {
    switch (sign) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
    }
  }
  return "unknown value";
}

function calculator(a, b, sign) {
  let oper = {
    "+": a + b,
    "-": a - b,
    "*": a * b,
    "/": a / b,
  };
  return oper[sign] ? oper[sign] : "unknown value";
}
