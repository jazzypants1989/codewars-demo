/*Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
  let newArray = [];
  for(let i = 0; i < a.length; i++){
    let bInA = false;
    for(let ding = 0; ding < b.length; ding++){
      if(a[i] === b[ding]) bInA = true;
    }
    if(!bInA) newArray.push(a[i])
  }
  return newArray
}
