/* Snail Sort

Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1
*/

snail = function (array) {
  let result
  while (array.length) {
    // First Row
    result = result ? result.concat(array.shift()) : array.shift()
    // Keep it moving
    for (let i = 0; i < array.length; i++) result.push(array[i].pop())
    // Bottom Row
    result = result.concat((array.pop() || []).reverse())
    // Left Side
    for (let i = array.length - 1; i >= 0; i--) result.push(array[i].shift())
  }
  return result
}

// Holy Guacamole, that was hard!
