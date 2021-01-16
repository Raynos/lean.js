'use strict'

const tape = require('@pre-bundled/tape')

const lean = require('../src/index.js')

tape('first test', (t) => {
  t.equal(typeof lean.validateFile, 'function')
  t.end()
})
