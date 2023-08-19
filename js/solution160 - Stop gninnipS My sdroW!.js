// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// https://www.codewars.com/kata/5264d2b162488dc400000001
function spinWords(string) {
  let words = string.split(" ")
  let newWords = []
  for (let word of words) {
    if (word.length >= 5) {
      let newWord = word.split("").reverse().join("")
      newWords.push(newWord)
    } else {
      newWords.push(word)
    }
  }

  return newWords.join(" ")
}
