// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// https://www.codewars.com/kata/5bb904724c47249b10000131

const scoreGame = (string) => {
  if (!string || string.length < 3) return 0 // Check if the string is valid and has the expected length
  const x = string[0]
  const y = string[2]
  if (x > y) return 3
  if (x < y) return 0
  if (x === y) return 1
  return 0 // Default return value in case of unexpected input
}

function points(games) {
  let score = 0
  for (let game of games) {
    score += scoreGame(game)
  }
  return score
}
