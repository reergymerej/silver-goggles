#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const dir = require('node-dir')

const entriesPath = path.resolve(__dirname, '../public/entries')

const entryDirs = dir.files(entriesPath, 'dir', null, {
  sync: true,
  shortName: false,
  recursive: false,
})

const readFileIfExists = (filePath) => {
  try {
    return fs.readFileSync(filePath, 'utf8')
  } catch (e) {
    return null
  }
}

const getTerminalLogResource = (entryDir, entryRootUri) => {
  const terminalLogPath = path.resolve(entryDir, 'terminal.log')
  const terminalLog = readFileIfExists(terminalLogPath)
  return terminalLog && {
    uri: `${entryRootUri}terminal.log`,
    content: terminalLog,
  }
}

const getEntryFromDir = (entryDir) => {
  const commentaryPath = path.resolve(entryDir, 'commentary.txt')
  const commentary = readFileIfExists(commentaryPath)
  const name = path.basename(entryDir)
  const entryRootUri = `/entries/${name}/`
  return {
    uri: `${entryRootUri}/commentary.txt`,
    name,
    commentary,
    resources: {
      terminal: getTerminalLogResource(entryDir, entryRootUri),
    },
  }
}

const entries = entryDirs.map(getEntryFromDir)
const outPath = path.resolve(__dirname, '../src/entries.json')
const output = JSON.stringify(entries)

fs.writeFileSync(outPath, output)
