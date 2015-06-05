'use strict'

var test = require('tape')
var hasRequire = require('./')

test(function (t) {
  t.throws(hasRequire.bind(null, 'code'), /id is required/)

  t.ok(hasRequire("require('foo')", 'foo'), 'single quotes')
  t.ok(hasRequire('require("foo")', 'foo'), 'double quotes')
  t.ok(hasRequire('require( "foo" )', 'foo'), 'whitespace')
  t.notOk(hasRequire('require("foo")', 'bar'), 'match id')

  t.ok(hasRequire.any('require("foo")'), 'normal')
  t.ok(hasRequire.any('require("foo-bar")'), 'dash')
  t.ok(hasRequire.any('require("foo_bar")'), 'underscore')
  t.ok(hasRequire.any('require("foo2")'), 'number')
  t.ok(hasRequire.any('require("foo.bar")'), 'dot')

  t.notOk(hasRequire.any('require'), 'no call')
  t.notOk(hasRequire.any('require()'), 'empty call')
  t.notOk(hasRequire.any('require(identifier)'), 'literal')
  t.notOk(hasRequire.any('require("")'), 'empty string')

  t.end()
})