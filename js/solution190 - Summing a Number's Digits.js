// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

// https://www.codewars.com/kata/52f3149496de55aded000410

const sumDigits = (number) =>
  Math.abs(number)
    .toString()
    .split("")
    .reduce((acc, digit) => acc + parseInt(digit), 0)
