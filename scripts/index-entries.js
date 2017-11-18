#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const dir = require('node-dir')

const dirPath = path.resolve(__dirname, '../public')
const regex = /\.txt$/

const files = dir.files(dirPath, 'file', null, {
  sync: true,
  shortName: false,
}).filter(name => name.match(regex))

const translateTextEntry = (entryFileName) => {
  return {
    commentary: fs.readFileSync(entryFileName, 'utf8'),
    resources: {
    },
  }
}

const entries = files.map(translateTextEntry)

const outPath = path.resolve(__dirname, '../src/entries.json')
const output = JSON.stringify(entries)
console.log(output)
// fs.writeFileSync(outPath, output)
