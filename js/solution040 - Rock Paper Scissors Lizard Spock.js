/* In this kata, your task is to implement an extended version of the famous rock-paper-scissors game. The rules are as follows:

    Scissors cuts Paper
    Paper covers Rock
    Rock crushes Lizard
    Lizard poisons Spock
    Spock smashes Scissors
    Scissors decapitates Lizard
    Lizard eats Paper
    Paper disproves Spock
    Spock vaporizes Rock
    Rock crushes Scissors

Task:

Given two values from the above game, return the Player result as "Player 1 Won!", "Player 2 Won!", or "Draw!".
Inputs

Values will be given as one of "rock", "paper", "scissors", "lizard", "spock".

 */

// each string given five boolean values?
// define each value with winners and losers
// explicity define tie

function rpsls(pl1,pl2){
  let win ='Draw!'
  let arr = ['scissors cuts paper','paper covers rock','rock crushes lizard','lizard poisons spock','spock smashes scissors','scissors decapitates lizard','lizard eats paper','paper disproves spock','spock vaporizes rock','rock crushes scissors'].map(v=>v.split` `)
  arr.map(v=>v[0]===pl1&&v[2]===pl2?win='Player 1':v[0]===pl2&&v[2]===pl1?win='Player 2':v)
  return win!=='Draw!'?`${win} Won!`:win
}

// I can't lie, I had to look this up.
