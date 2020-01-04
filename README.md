# readdir
Get the absolute path of files in a folder

## Install

```sh
$ npm i @zhangfuxing/readdir
```  

## Useage  

### use Synchronous method

```js
const assert = require('assert');
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
const { getFilePaths } = require('@zhangfuxing/readdir');
const testFilePath = path.resolve('./test/index.test.js');

;(async () => {
  const paths = await getFilePaths('./test');
  assert(paths);
  assert(Array.isArray(paths));
  assert(paths.length === 1);
  assert(paths[0] === testFilePath);
})()(console.error);
```  

## Test

```sh
$ npm test
```  