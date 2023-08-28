/*Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce() function of the built-in javascript Array object. If you're not familiar with reduce(), reading over the documentation may help.

function sum(array) {
  // Use array.reduce() to find and return the
  // sum of the values in array.
}

For example:

var someNumbers = [1,2,3,4,5,6,7,8,9,10];

sum(someNumbers); // should return 55

https://www.codewars.com/kata/532b4057484b0e58e8000766
*/

//easy one today

function sum(array) {
  return array.reduce((acc, c) => acc + c, 0)
}