#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const dir = require('node-dir')
const dirPath = path.resolve(__dirname, '../public')
const regex = /\.txt$/
const files = dir.files(dirPath, 'file', null, {
  sync: true,
  shortName: true,
}).filter(name => name.match(regex))

const outPath = path.resolve(__dirname, '../src/entries.json')
fs.writeFileSync(outPath, JSON.stringify(files))
