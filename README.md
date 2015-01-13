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
hasRequire('require(\'foo\'', 'foo'); // => true
```
