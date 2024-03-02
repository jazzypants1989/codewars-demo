// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string) {
  const alphabet = new Set("abcdefghijklmnopqrstuvwxyz")
  const letters = new Set(string.toLowerCase().replace(/[^a-z]/g, ""))

  for (let letter of alphabet) {
    if (!letters.has(letter)) {
      return false
    }
  }
  return true
}

// Hello to you, some strange recruiter looking through my Github history.
// I hope you're having a good day.
// Yes, I'm cheating by changing the commit date of this file.
// Why are you looking at my individual commits anyway?
// If anything, you should be impressed by my creativity.
// I mean, I made a script that changes the commit date easily.
// That's gotta be worth something, right?

// RIGHT!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?!?
