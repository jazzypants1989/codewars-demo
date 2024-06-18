// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

// https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed

function replace(s) {
  let vowels = "aeiou"
  return s
    .split("")
    .map((el, i, arr) => (vowels.includes(el.toLowerCase()) ? "!" : el))
    .join("")
}
