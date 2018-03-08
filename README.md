<!---
[![NPM Package](https://img.shields.io/npm/v/dhc.svg?style=flat-square)](https://www.npmjs.org/package/dhc)
[![Build Status](https://img.shields.io/travis/dfinity/dhc-js.svg?branch=master&style=flat-square)](https://travis-ci.org/dfinity/dhc-js)
[![Coverage Status](https://img.shields.io/coveralls/dfinity/dhc-js.svg?style=flat-square)](https://coveralls.io/r/dfinity/dhc-js)
-->

# Synopsis

Javascript bindings for the [Dfinity Haskell to WebAssembly compiler](https://github.com/dfinity/dhc).

Compiled via GHCJS.

-
## Installation
`npm install dhc`


## Usage

```javascript
const dhc = require('dhc')

const output = dhc.compileHsToWasm('main = putStr "Hello"')
// [ 0, 97, 115, 109, ... ]

const err = dhc.compileHsToWasm('syntax error')
// '(line 1, column 13):\nunexpected end of input\nexpecting " ", "\\r\\n", "--" or end of input\nexpected ='
```

## License

[**(C) 2018 DFINITY STIFTUNG**](http://dfinity.network)

All code and designs are open sourced under GPL V3.

![image](https://user-images.githubusercontent.com/6457089/32753794-10f4cbc2-c883-11e7-8dcf-ff8088b38f9f.png)
