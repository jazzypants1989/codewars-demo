#!/usr/bin/env node

import { exec } from "child_process"
import process from "process"

function amendGitCommitWithDate(date) {
  const command = `git commit --amend --no-edit --date "${date}"`
  const options = {
    env: {
      ...process.env, // Spread the existing environment variables
      GIT_COMMITTER_DATE: date, // Set the GIT_COMMITTER_DATE
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

const dateStr = process.argv[2]
const date = new Date(dateStr)

if (!dateStr || isNaN(date.getTime())) {
  console.error("Please provide a valid date.")
  process.exit(1)
}

const isoDate = date.toISOString()
amendGitCommitWithDate(isoDate)
