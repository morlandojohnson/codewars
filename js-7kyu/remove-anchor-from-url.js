/*
Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples
"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"
*/

// My Solution

/*
Split at '#' for two arrays, but only return the first, before the hash
*/

function removeUrlAnchor(url) {
  return url.split("#")[0];
}

// Other Solutions:

const removeUrlAnchor = (url) => url.split("#")[0];

function removeUrlAnchor(url) {
  let string = "";
  for (let i = 0; i < url.length; i++) {
    if (url[i] === "#") {
      break;
    }
    string += url[i];
  }
  return string;
}
