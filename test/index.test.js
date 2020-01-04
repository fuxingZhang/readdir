'use strict';

const assert = require('assert');
const path = require('path');
const { getFilePaths, getFilePathsSync } = require('../index');

describe('#indexOf()', function () {
  const dir = path.resolve('./test');
  const result = path.resolve('./test/index.test.js');

  it('getFilePaths should ok', async () => {
    const res = await getFilePaths(dir);
    assert(res);
    assert(Array.isArray(res));
    assert(res.length === 1);
    assert(res[0] === result);
  });

  it('getFilePathsSync should ok', () => {
    const res = getFilePathsSync(dir);
    assert(res);
    assert(Array.isArray(res));
    assert(res.length === 1);
    assert(res[0] === result);
  });
});