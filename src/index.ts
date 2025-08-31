import { slash, u, uw, ux } from '@igorskyflyer/upath'
import { platform } from 'node:os'

const os=platform()
const isWindows=os==='win32'

const winDirectoryCount=2
const unixDirectoryCount=1
const rootDirectoryCount=isWindows? winDirectoryCount:unixDirectoryCount

/**
 * Checks whether the given path is a root folder/drive path.
 * @private
 * @param {string} path
 * @param {string} osSlash
 * @param {number} count
 * @returns {boolean}
 */
function checkRootDirectory(path: string, osSlash: string, count: number): boolean {
  if (!path) {
    return false
  }

  return (path.split(osSlash).filter((value) => value.length>0).length<count)
}

/**
 * Checks whether the given path is a root folder/drive path for host OS.
 * @param {string} path
 * @returns {boolean}
 */
export function isRootDirectory(path: string): boolean {
  return checkRootDirectory(u(path, true), slash, rootDirectoryCount)
}

/**
 * Checks whether the given path is a root folder/drive path for Windows OS.
 * @param {string} path
 * @returns {boolean}
 */
export function isRootDirectoryWin(path: string): boolean {
  return checkRootDirectory(uw(path, true), '\\', winDirectoryCount)
}

/**
 * Checks whether the given path is a root folder/drive path for UNIX-like OS'.
 * @param {string} path
 * @returns {boolean}
 */
export function isRootDirectoryUnix(path: string): boolean {
  return checkRootDirectory(ux(path, true), '/', unixDirectoryCount)
}
