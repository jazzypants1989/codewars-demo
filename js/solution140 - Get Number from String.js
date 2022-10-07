/*
Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

Function:
*/
function getNumberFromString(s) {
  let num = '';
  for (let char of s) {
    if (char >= '0' && char <= '9')
      num += char;
  }
  return parseInt(num);
}