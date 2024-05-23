// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
// https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
  const array = string.split("")
  const newArray = array.map((letter) => {
    if (letter >= "A" && letter <= "Z") {
      return " " + letter
    } else {
      return letter
    }
  })

  return newArray.join("")
}
