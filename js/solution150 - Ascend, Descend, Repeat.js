/*
You are given three integer inputs: length, minimum, and maximum.

Return a string that:

Starts at minimum
Ascends one at a time until reaching the maximum, then
Descends one at a time until reaching the minimum
repeat until the string is the appropriate length
Examples:

 length: 5, minimum: 1, maximum: 3   ==>  "12321"
 length: 14, minimum: 0, maximum: 2  ==>  "01210121012101"
 length: 11, minimum: 5, maximum: 9  ==>  "56789876567"
*/
function ascendDescend(len, min, max){
  let inc = '', dec = '', res = '';
  for (let i = min; i <= max; i++) inc += i;
  for (let j = (max - 1); j > min; j--) dec += j;
  for (let k = 0; k < len; k++) {
    res += inc;
    res += dec;
  }
  return res.slice(0, len)
}
