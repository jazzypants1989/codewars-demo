/*Convert number to reversed array of digits

Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

https://www.codewars.com/kata/5583090cbe83f4fd8c000051
*/

function digitize(n) {
  return String(n).split("").map(Number).reverse()
}
