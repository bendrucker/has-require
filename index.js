'use strict'

var escape = require('escape-string-regexp')

exports = module.exports = function hasRequire (code, id) {
  return new RequireChecker(code).has(id)
}

exports.Checker = RequireChecker

function RequireChecker (code) {
  this.code = code;
}

RequireChecker.prototype.has = function hasRequire (id) {
  if (!id) throw new Error('module id is required')
  var regex = new RegExp([
    escape('require('),
    '\\s*[\'"]',
    escape(id),
    '[\'"]\\s*',
    escape(')')
  ].join(''))
  return regex.test(this.code)
}
