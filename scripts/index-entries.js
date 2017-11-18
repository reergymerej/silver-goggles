#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const dir = require('node-dir')

const entriesPath = path.resolve(__dirname, '../public/entries')

const entryDirs = dir.files(entriesPath, 'dir', null, {
  sync: true,
  shortName: false,
})

const readFileIfExists = (filePath) => {
  try {
    return fs.readFileSync(filePath, 'utf8')
  } catch (e) {
    return null
  }
}

const getEntryFromDir = (entryDir) => {
  const commentaryPath = path.resolve(entryDir, 'commentary.txt')
  const terminalLogPath = path.resolve(entryDir, 'terminal.log')
  const commentary = readFileIfExists(commentaryPath)
  const terminalLog = readFileIfExists(terminalLogPath)
  const name = path.basename(entryDir)
  return {
    uri: `/entries/${name}/commentary.txt`,
    name,
    commentary,
    resources: {
      terminal: terminalLog && `${name}/terminal.log`,
    },
  }
}

const entries = entryDirs.map(getEntryFromDir)
const outPath = path.resolve(__dirname, '../src/entries.json')
const output = JSON.stringify(entries)

fs.writeFileSync(outPath, output)
