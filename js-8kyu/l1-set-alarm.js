/*
Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false
*/

// My Solution:

// switch statement to determine if true/false

function setAlarm(employed, vacation) {
  switch (true) {
    case employed && vacation:
      return false;
    case employed && !vacation:
      return true;
    case !employed && vacation:
      return false;
    case !employed && !vacation:
      return false;
  }
}

// Other Solutions:

function setAlarm(employed, vacation) {
  return employed && !vacation;
}

const setAlarm = (employed, vacation) => employed && !vacation;

function setAlarm(employed, vacation) {
  return employed && !vacation ? true : false;
}
