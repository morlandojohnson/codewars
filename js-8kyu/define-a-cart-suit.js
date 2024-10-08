/*
You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

*/

// My Solution:

/*
"♣", "♦", "♥", "♠"

Condtional to check if last char in string is suit.
*/

function defineSuit(card) {
  return card[card.length - 1] === "♣"
    ? "clubs"
    : card[card.length - 1] === "♦"
    ? "diamonds"
    : card[card.length - 1] === "♥"
    ? "hearts"
    : "spades";
}

// Other Solutions:

function defineSuit(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts",
  };
  return s[card.charAt(card.length - 1)];
}

function defineSuit(card) {
  if (card.includes("♥")) return "hearts";
  if (card.includes("♦")) return "diamonds";
  if (card.includes("♣")) return "clubs";
  if (card.includes("♠")) return "spades";
}

function defineSuit(card) {
  switch (card.slice(-1)) {
    case "♣":
      return "clubs";
    case "♦":
      return "diamonds";
    case "♥":
      return "hearts";
    case "♠":
      return "spades";
  }
}
