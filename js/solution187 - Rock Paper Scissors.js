// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

const rps = (p1, p2) => {
  const winCondition = {
    "scissors": "paper",
    "paper": "rock",
    "rock": "scissors",
  }
  if (p1 === p2) return "Draw!"
  if (p2 === winCondition[p1]) return "Player 1 won!"
  else return "Player 2 won!"
}
