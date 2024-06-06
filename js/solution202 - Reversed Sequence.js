// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

const reverseSeq = (n) => {
  const array = []

  while (n > 0) {
    array.push(n)
    n--
  }
  return array
}
