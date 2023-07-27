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
