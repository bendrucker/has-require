# has-require [![Build Status](https://travis-ci.org/bendrucker/has-require.svg?branch=master)](https://travis-ci.org/bendrucker/has-require)

Check if a string of code requires a specified module by id.

## Installing

```bash
$ npm install has-require
```

## API

##### `hasRequire(code, id)` -> `Boolean`

Checks a string of `code` for a `require(id)`, where `id` is an valid `require` input such as a package name or path. 

```js
hasRequire("require('foo')", 'foo'); // => true
```

##### `hasRequire.any(code)` -> `Boolean`

Checks if any string literal is required.

<hr>

### `Checker`

##### `new hasRequire.Checker(code)` -> `checker`

Constructs a new `checker` instance for a string of `code`, allowing you to performantly check many module ids.

##### `checker.any()` -> `Boolean`

Checks if any string literal is required. The result is cached.

##### `checker.has(id)` -> `Boolean`

Checks the specified module id is required. Uses `checker.any()` first, so calling `has` for multiple ids when no `require` is present (`!checker.any()`) will avoid needlessly re-testing the code.
