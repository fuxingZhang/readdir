# readdir
Get the absolute path of files in a folder

## Install

```sh
$ npm i @zhangfuxing/readdir
```  

## Useage  

### use synchronous method

```js
const assert = require('assert');
const path = require('path');
const { getFilePathsSync } = require('@zhangfuxing/readdir');
const paths = getFilePathsSync('./test');
const testFilePath = path.resolve('./test/index.test.js');
assert(paths);
assert(Array.isArray(paths));
assert(paths.length === 1);
assert(paths[0] === testFilePath);
```  

### use asynchronous method
```js
const assert = require('assert');
const path = require('path');
const { getFilePaths } = require('@zhangfuxing/readdir');
const testFilePath = path.resolve('./test/index.test.js');

;(async () => {
  const paths = await getFilePaths('./test');
  assert(paths);
  assert(Array.isArray(paths));
  assert(paths.length === 1);
  assert(paths[0] === testFilePath);
})().catch(console.error);
```  

## Test

```sh
$ npm test
```  