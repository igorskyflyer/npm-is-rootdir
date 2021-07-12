## npm-is-rootdir

🔼 Provides a way to check if the given path is the root/drive directory. ⛔ Uses `String` manipulation techniques and it doesn't actually check if the path exists.

<br>

### Usage

Install it first by issuing,

```shell
npm i "@igor.dvlpr/is-rootdir"
```

<br>

Three functions are exposed,

- `isRootDirectory(path: string): boolean`,
- `isRootDirectoryUnix(path: string): boolean`,
- `isRootDirectoryWin(path: string): boolean`.

> ℹ `isDirectoryRoot()` internally uses `isRootDirectoryUnix()` and `isRootDirectoryWin()` functions while taking into accont the host OS and uses the appropriate function for it _\[OS\]_, useful for cross-platform calls without having to worry about the path separators and related issues.

<br>

Use it as follows:

```js
const {
  isRootDirectoryUnix,
  isRootDirectoryWin,
} = require('@igor.dvlpr/is-rootdir')

// no examples and tests for isRootDirectory, read more above

console.log(isRootDirectoryUnix('')) // prints false

console.log(isRootDirectoryUnix('/')) // prints true

console.log(isRootDirectoryUnix('/////////')) // prints true - thanks to uPath, paths are normalized first 🤗

console.log(isRootDirectoryUnix('home')) // prints false

console.log(isRootDirectoryUnix('/home')) // prints false

console.log(isRootDirectoryUnix('/home/user')) // prints false

console.log(isRootDirectoryWin('')) // prints false

console.log(isRootDirectoryWin('D:')) // prints true

console.log(isRootDirectoryWin('D:\\\\\\\\\\')) // prints true - thanks to uPath, paths are normalized first 🤗

console.log(isRootDirectoryWin('D:\\')) // prints false

console.log(isRootDirectoryWin('D:\\Dev')) // prints false

console.log(isRootDirectoryWin('D:\\Dev\\Projects')) // prints false
```
