'use strict';

var assert = require('assert');

module.exports = function hasRequire (code, id) {
  assert(id, 'module id is required');
  var regex = new RegExp('require\\(\\s*[\'"]' + id + '[\'"]\\s*\\)');
  return regex.test(code);
};
