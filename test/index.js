'use strict';

var expect     = require('chai').expect;
var hasRequire = require('../');

describe('has-require', function () {

  it('matches single quotes', function () {
    expect(hasRequire('require(\'foo\')', 'foo')).to.be.true;
  });

  it('matches double quotes', function () {
    expect(hasRequire('require("foo")', 'foo')).to.be.true;
  });

  it('matches with whitespace around id', function () {
    expect(hasRequire('require( "foo" )', 'foo')).to.be.true;
  });

  it('only matches the specified id', function () {
    expect(hasRequire('require("foo")', 'bar')).to.be.false;
  });

  it('requires an id', function () {
    expect(hasRequire).to.throw('id is required');
  });

});
