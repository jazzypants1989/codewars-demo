/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

https://www.codewars.com/kata/55908aad6620c066bc00002a
*/

function XO(str) {
  const iterator = str[Symbol.iterator]()
  const xs = []
  const os = []

  let thisOne = iterator.next()

  while (!thisOne.done) {
    if (thisOne.value.toLowerCase() == "x") xs.push(thisOne.value)
    else if (thisOne.value.toLowerCase() == "o") os.push(thisOne.value)
    thisOne = iterator.next()
  }
  if (xs.length === os.length) return true
  else return false
}
