/*Write a function that will check if two given characters are the same case.

    If either of the characters is not a letter, return -1
    If both characters are the same case, return 1
    If both characters are letters, but not the same case, return 0
*/

function sameCase(a, b){
  let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  if (lowerCase.includes(a) && lowerCase.includes(b)){
    return 1
  }else if (upperCase.includes(a) && upperCase.includes(b)){
    return 1
  }else if (lowerCase.includes(a) && upperCase.includes(b)) {
    return 0
  }else if (lowerCase.includes(b) && upperCase.includes(a)){
    return 0
  }else{
    return -1
  }
}

// LMAO, I can't believe this works.