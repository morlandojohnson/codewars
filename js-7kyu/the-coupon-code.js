/*
Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

 */

// My Solution

/*
Check if enteredCode is the same as currentCode
Also need to check if the current date is before the expiration date
Date.parse() to return the date timestamp. The current date will need to be less than or equal to the expiration date
 */

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    Date.parse(currentDate) <= Date.parse(expirationDate)
  );
}

// Other Solutions:

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    new Date(currentDate) <= new Date(expirationDate)
  );
}

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  let cd = new Date(currentDate);
  let ed = new Date(expirationDate);
  return enteredCode === correctCode && ed >= cd;
}
