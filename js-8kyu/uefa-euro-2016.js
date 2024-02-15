/*
uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
*/

// My Solution:

function uefaEuro2016(teams, scores) {
  let result =
    scores[0] > scores[1]
      ? `${teams[0]} won!`
      : scores[0] < scores[1]
      ? `${teams[1]} won!`
      : `teams played draw.`;
  return `At match ${teams[0]} - ${teams[1]}, ${result}`;
}

// Other Solutions:

function uefaEuro2016(teams, scores) {
  const [team1, team2] = teams;
  const [score1, score2] = scores;
  const winner = score1 > score2 ? team1 : team2;

  return score1 === score2
    ? `At match ${team1} - ${team2}, teams played draw.`
    : `At match ${team1} - ${team2}, ${winner} won!`;
}

function uefaEuro2016(teams, scores) {
  const winner =
    scores[0] > scores[1]
      ? teams[0]
      : scores[0] === scores[1]
      ? null
      : teams[1];
  const result = `At match ${teams[0]} - ${teams[1]}`;
  if (winner) {
    return `${result}, ${winner} won!`;
  }
  return `${result}, teams played draw.`;
}
