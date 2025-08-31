import { assert, describe, it } from 'vitest'
import { isRootDirectoryUnix, isRootDirectoryWin } from '../src/index.js'

describe('🧪 isRootDirectory tests 🧪', () => {
  describe('isRootDirectoryUnix', () => {
    it('isRootDirectoryUnix("") should return false', () => {
      assert.isFalse(isRootDirectoryUnix(''))
    }) // #1

    it('isRootDirectoryUnix("/") should return true', () => {
      assert.isTrue(isRootDirectoryUnix('/'))
    }) // #2

    it('isRootDirectoryUnix("/////////"") should return true', () => {
      assert.isTrue(isRootDirectoryUnix('/////////'))
    }) // #3 - thanks to uPath, paths are normalized first 🤗

    it('isRootDirectoryUnix("home") should return false', () => {
      assert.isFalse(isRootDirectoryUnix('home'))
    }) // #4

    it('isRootDirectoryUnix("/home") should return false', () => {
      assert.isFalse(isRootDirectoryUnix('/home'))
    }) // #5

    it('isRootDirectoryUnix("/home/user") should return false', () => {
      assert.isFalse(isRootDirectoryUnix('/home/user'))
    }) // #6
  })

  describe('isRootDirectoryWin', () => {
    it('isRootDirectoryWin("") should return false', () => {
      assert.isFalse(isRootDirectoryWin(''))
    }) // #7

    it('isRootDirectoryWin("D:") should return true', () => {
      assert.isTrue(isRootDirectoryWin('D:'))
    }) // #8

    it('isRootDirectoryWin("D:\\\\\\\\\\"") should return true', () => {
      assert.isTrue(isRootDirectoryWin('D:\\\\\\\\\\'))
    }) // #9 - thanks to uPath, paths are normalized first 🤗

    it('isRootDirectoryWin("D:\\") should return false', () => {
      assert.isTrue(isRootDirectoryWin('D:\\'))
    }) // #10

    it('isRootDirectoryWin("D:\\Dev") should return false', () => {
      assert.isFalse(isRootDirectoryWin('D:\\Dev'))
    }) // #11

    it('isRootDirectoryWin("D:\\Dev\\Projects") should return false', () => {
      assert.isFalse(isRootDirectoryWin('D:\\Dev\\Projects'))
    }) // #12
  })
})
