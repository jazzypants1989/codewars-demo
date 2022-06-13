// https://www.codewars.com/kata/582a53ed261c2af9d200018c/train/javascript

function addUsername(list) {
    const thisYear = (new Date()).getFullYear()
    return list.map(dev => {
    const first = dev.firstName.toLowerCase()
    const last = dev.lastName.toLowerCase()[0]
    const age = thisYear - dev.age
    return {...dev, username: `${first}${last}${age}`}
  })}