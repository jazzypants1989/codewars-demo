// Parameters - An integer that is non-negative indicating a count of seconds which are the basic unit on the clock. The max numbers of seconds will be 359999 or less.
// Returns - A clock value containing hours, minutes, and seconds with the specific format: HH:MM:SS -- with values 0 and below having a leading zero.
// Examples
// Pseudocode - Take in an integer and divide by 60 the appropriate amount of times and assign the result to hours, minutes, and seconds. Pad leading zeros where needed, and print hours, minutes, seconds with a colon between them.

function humanReadable (seconds) {
    let hours = Math.floor(seconds / 3600).toString().padStart(2, '0')
    let minutes = (Math.floor(seconds / 60) % 60).toString().padStart(2, '0')
    let seconds2 = (seconds % 60).toString().padStart(2, '0')
    return (`${hours}:${minutes}:${seconds2}`)
  }