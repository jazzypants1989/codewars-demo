/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/

function countCharacters(chars) {
  return chars
    .reduce( function(memo, char){
      memo[char] = memo[char] ? memo[char] + 1 : 1;
      return memo;
    }, {});
}

function duplicateEncode(word){
  const chars = word.split('').map(ch => ch.toLowerCase());
  const charsCount = countCharacters(chars);
  return chars
    .map( ch => charsCount[ch] > 1 ? ')' : '(' )
    .join('');
}