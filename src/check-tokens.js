'use strict'

const ALL_VALUES = '__LEANJS__ALL__VALUES__'

/**
 * @type {Record<string, string[] | string>}
 */
const ALLOWED_TOKENS = {
  Keyword: ['function', 'var', 'while', 'return'],
  Identifier: ALL_VALUES,
  Numeric: ALL_VALUES,
  Punctuator: [
    '(', ')', '{', '=', '|', ';', '[', '>>', ']', '!=',
    '+', '}', '-'
  ]
}

/**
 * @typedef {import('./index.js').Context} Context
 */

/**
 * @param {Context} context
 * @param {ESTreeToken[]} tokens
 * @returns {void}
 */
function checkTokens (context, tokens) {
  // ast.tokens
  // console.log('ast', tokens)

  for (const token of tokens) {
    const allowedValues = ALLOWED_TOKENS[token.type]

    if (allowedValues === ALL_VALUES) {
      continue
    }
    if (!allowedValues || !allowedValues.includes(token.value)) {
      context.addError(
        'banned-token',
        `Token (${token.type}) with value (${token.value}) is not allowed`
      )
    }
  }
}
exports.checkTokens = checkTokens
