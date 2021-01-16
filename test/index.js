'use strict'

process.on('unhandledRejection', (/** @type {Error} */ err) => {
  process.nextTick(() => { throw err })
})

const path = require('path')
const tape = require('@pre-bundled/tape')

const lean = require('../src/index.js')
const FIXTURES_DIR = path.join(__dirname, 'fixtures')

tape('parse 1-asm-example.js', async (t) => {
  const fileName = path.join(FIXTURES_DIR, '1-asm-example.js')

  const result = await lean.validateFile(fileName)

  t.equal(result.errors.length, 0)
  t.end()
})
