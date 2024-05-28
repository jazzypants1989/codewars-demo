// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

// https://www.codewars.com/kata/54a91a4883a7de5d7800009c

function incrementString(str) {
  let numStr = ""
  let i = str.length - 1

  while (i >= 0 && !isNaN(str[i]) && str[i] !== " ") {
    numStr = str[i] + numStr
    i--
  }

  if (numStr === "") {
    return str + "1"
  }

  const prefix = str.slice(0, str.length - numStr.length)

  const incrementedNumber = (parseInt(numStr, 10) + 1)
    .toString()
    .padStart(numStr.length, "0")

  return prefix + incrementedNumber
}
