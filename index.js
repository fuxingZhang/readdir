const fs = require('fs');
const path = require('path');

/**
 * @param {String} dir folder path
 * @returns {String[]}
 */
function getFilePathsSync(dir) {
  const result = [];
  const paths = fs.readdirSync(dir);

  for (const item of paths) {
    const filepath = path.join(dir, item);
    const isDir = fs.statSync(filepath).isDirectory();

    if (isDir) {
      result.push(...getFilePathsSync(filepath));
    } else {
      result.push(path.resolve(filepath));
    }
  }

  return result
}

/**
 * @param {String} dir folder path
 * @returns {Promise<String[]>}
 */
async function getFilePaths(dir) {
  const result = [];
  const paths = await fs.promises.readdir(dir);

  for (const item of paths) {
    const filepath = path.join(dir, item);
    const isDir = (await fs.promises.stat(filepath)).isDirectory();

    if (isDir) {
      const subPaths = await getFilePaths(filepath);
      result.push(...subPaths);
    } else {
      result.push(path.resolve(filepath));
    }
  }

  return result
}

module.exports = {
  getFilePaths,
  getFilePathsSync
}