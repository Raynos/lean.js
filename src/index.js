'use strict'

const fs = require('fs')
const estree = require('@typescript-eslint/typescript-estree')

const tokens = require('./check-tokens.js')

class LeanError extends Error {
  /**
   * @param {string} message
   * @param {string} type
   * @param {string} [suggestionText]
   */
  constructor (message, type, suggestionText) {
    super(message)
    /** @type {string} */
    this.name = this.constructor.name
    /** @type {string} */
    this.leanType = type
    /** @type {string} */
    this.suggestionText = suggestionText || ''
  }
}

class Context {
  constructor () {
    /** @type {LeanError[]} */
    this.errors = []
  }

  /**
   * @param {string} type
   * @param {string} message
   * @param {string} [suggestionText]
   * @returns {void}
   */
  addError (type, message, suggestionText) {
    const e = new LeanError(message, type, suggestionText)
    this.errors.push(e)
  }

  /** @returns {PartialResult<void>} */
  getResult () {
    return {
      errors: this.errors,
      partial: null
    }
  }
}
exports.Context = Context

/**
 * @param {string} fileName
 * @returns {Promise<PartialResult<void>>}
 */
async function validateFile (fileName) {
  const text = await fs.promises.readFile(fileName, 'utf8')
  const context = validateText(text)

  return context.getResult()
}
exports.validateFile = validateFile

/**
 * @param {string} text
 * @returns {Context}
 */
function validateText (text) {
  const context = new Context()

  const ast = estree.parse(text, {
    filePath: 'estree.js',
    errorOnUnknownASTType: true,
    jsx: false,
    useJSXTextNode: false,
    loc: true,
    range: true,
    tokens: true
  })

  tokens.checkTokens(context, ast.tokens)

  return context
}
