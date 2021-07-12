const { slash, u, uw, ux } = require('@igor.dvlpr/upath')
const { platform } = require('os')

const os = platform()
const isWindows = os === 'win32'

const winDirectoryCount = 2
const unixDirectoryCount = 1
const rootDirectoryCount = isWindows ? winDirectoryCount : unixDirectoryCount

/**
 * Checks whether the given path is a root folder/drive path.
 * @private
 * @param {string} path
 * @returns {boolean}
 */
function checkRootDirectory(path, osSlash, count) {
  if (!path) {
    return false
  }

  // prettier-ignore
  return (path.split(osSlash).filter((value) => value.length > 0).length < count)
}

/**
 * Checks whether the given path is a root folder/drive path for host OS.
 * @param {string} path
 * @returns {boolean}
 */
function isRootDirectory(path) {
  return checkRootDirectory(u(path, true), slash, rootDirectoryCount)
}

/**
 * Checks whether the given path is a root folder/drive path for Windows OS.
 * @param {string} path
 * @returns {boolean}
 */
function isRootDirectoryWin(path) {
  return checkRootDirectory(uw(path, true), '\\', winDirectoryCount)
}

/**
 * Checks whether the given path is a root folder/drive path for UNIX-like OS'.
 * @param {string} path
 * @returns {boolean}
 */
function isRootDirectoryUnix(path) {
  return checkRootDirectory(ux(path, true), '/', unixDirectoryCount)
}

// here 👇 you should export VS Code dependent API
module.exports = {
  isRootDirectory,
  isRootDirectoryUnix,
  isRootDirectoryWin,
}
