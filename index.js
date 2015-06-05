'use strict'

var escape = require('escape-string-regexp')

exports = module.exports = function hasRequire (code, id) {
  return new RequireChecker(code).has(id)
}

exports.any = function anyRequire (code) {
  return new RequireChecker(code).any()
}

exports.Checker = RequireChecker

function RequireChecker (code) {
  this.code = code
}

var anyRegExp = createRegExp('[A-Za-z0-9_.-]+')
RequireChecker.prototype.any = function anyRequire () {
  if (this._any != null) return this._any
  this._any = anyRegExp.test(this.code)
  return this._any
}

RequireChecker.prototype.has = function hasRequire (id) {
  if (!id) throw new Error('module id is required')
  return this.any() && createRegExp(escape(id)).test(this.code)
}

function createRegExp (input) {
  return new RegExp([
    escape('require('),
    '\\s*[\'"]',
    input,
    '[\'"]\\s*',
    escape(')')
  ].join(''))
}
