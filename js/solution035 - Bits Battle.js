/*
Description:
The odd and even numbers are fighting against each other!
You are given a list of positive integers. The odd numbers from the list will fight using their 1 bits from their binary representation, while the even numbers will fight using their 0 bits. If present in the list, number 0 will be neutral, hence not fight for either side.
You should return:
odds win if number of 1s from odd numbers is larger than 0s from even numbers
evens win if number of 1s from odd numbers is smaller than 0s from even numbers
tie if equal, including if list is empty
Please note that any prefix that might appear in the binary representation, e.g. 0b, should not be counted towards the battle.
Example:
For an input list of [5, 3, 14]:
odds: 5 and 3 => 101 and 11 => four 1s
evens: 14 => 1110 => one 0
Result: odds win the battle with 4-1
If you enjoyed this kata, you can find a nice variation of it here.
*/

function bitsBattle(numbers) {
  let count = (n, d) => {
    let m = 0;
    while (n != 0) {
      if (n % 2 == d) m++;
      n >>= 1;
    }
    return m;
  }
  let hbc = n => count(n, 1);
  let lbc = n => count(n, 0);
  let [odds, evns] = [0, 0];
  for (let n of numbers) {
    if (n == 0) continue;
    if (n % 2 == 1) odds += hbc(n);
    else evns += lbc(n);
  }
  return odds == evns ? "tie"
    : odds > evns ? "odds win"
    : "evens win";
}
