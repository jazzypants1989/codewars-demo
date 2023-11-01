#!/usr/bin/env node

import { exec } from "child_process"
import process from "process"

let dateStr = process.argv[2]
if (dateStr === "--help" || dateStr === "-h") {
  console.log(`
  This script amends the last Git commit with the provided date. 
  It's tiny, but it can handle some colloquial date formats...
  Like 'today' or 'July 3rd, 2022'.
  Don't forget to wrap your date in quotes if it contains spaces.
  
  Usage: node amend <date>
  OR
  ./amend.js <date>
  OR
  npm run amend -- <date>
  
  Example: node amend 2021-01-01
  Example: node amend "November 1st, 2023"
  Example: node amend today
  Example: node amend yesterday
  Example: node amend tomorrow
  `)
  process.exit(0)
}

// check for st, nd, rd, th
const match = dateStr.match(/(\d+)(st|nd|rd|th)/)
if (match) {
  dateStr = dateStr.replace(match[0], match[1])
}

// check for today, yesterday, tomorrow
dateStr = adjustDate(dateStr)

const date = new Date(dateStr)

if (!dateStr || isNaN(date.getTime())) {
  console.error("Please provide a valid date.")
  process.exit(1)
}

const isoDate = date.toISOString()
amendGitCommitWithDate(isoDate)

function amendGitCommitWithDate(date) {
  const command = `git commit --amend --no-edit --date "${date}"`
  const options = {
    env: {
      ...process.env,
      GIT_COMMITTER_DATE: date,
    },
  }

  exec(command, options, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`)
      process.exit(1)
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`)
      process.exit(1)
    }
    console.log(`Git commit amended with date ${date}. Output: ${stdout}`)
  })
}

function adjustDate(dateStr) {
  const dateMap = {
    today: 0,
    yesterday: -1,
    tomorrow: 1,
  }

  if (dateMap[dateStr]) {
    const date = new Date()
    date.setDate(date.getDate() + dateMap[dateStr])
    return date.toISOString()
  }

  return dateStr
}
