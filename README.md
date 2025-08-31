<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-is-rootdir/main/media/is-rootdir.png" alt="Icon of Is RootDir" width="256" height="256">
  <h1>Is RootDir</h1>
</div>

<br>

<h4 align="center">
  🔼 Checks whether the given path is the root of a drive or filesystem. ⛔
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
- [Examples](#️-examples)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 🖥 OS‑aware detection - auto‑adjusts logic for Windows or UNIX‑like systems
- 📂 Root path check - quickly tells if a path is a drive root or /
- 🔄 Cross‑platform helpers - uses [`@igorskyflyer/upath`](https://www.npmjs.com/package/@igorskyflyer/upath) for consistent path formatting
- 🪟 Windows‑specific check - validates `C:\` style root directories
- 🐧 UNIX‑specific check - validates / style root directories
- 🧩 Reusable core - single `checkRootDirectory()` powers all variants
- 🚫 Empty‑safe - gracefully handles missing or empty path strings

<br>

> ### 🛑 CAUTION
>
> #### Implementation
>
> Uses `String` manipulation techniques and it doesn't actually check if the path exists.
>

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/is-rootdir
```

```bash
yarn add @igorskyflyer/is-rootdir
```

```bash
npm i @igorskyflyer/is-rootdir
```

<br>
<br>

## 🤹🏼 API

Three functions are exposed,

- `isRootDirectory(path: string): boolean`,
- `isRootDirectoryUnix(path: string): boolean`,
- `isRootDirectoryWin(path: string): boolean`.

> ### 💡 TIP
>
> #### Differences
>
> `isDirectoryRoot()` internally uses `isRootDirectoryUnix()` and `isRootDirectoryWin()` functions while taking into account the host OS and uses the appropriate function for the _\[OS\]_, useful for cross-platform calls without having to worry about the path separators and related issues.
>
>

<br>
<br>

## 🗒️ Examples

```ts
import { isRootDirectoryUnix, isRootDirectoryWin } from '@igorskyflyer/is-rootdir'

// no examples and tests for isRootDirectory(), read why above

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

<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-is-rootdir/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-is-rootdir/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/jmap](https://www.npmjs.com/package/@igorskyflyer/jmap)

> _🕶️ Reads a JSON file into a Map. 🌻_

<br>

[@igorskyflyer/keppo](https://www.npmjs.com/package/@igorskyflyer/keppo)

> _🎡 Parse, manage, compare and output SemVer-compatible version numbers. 🛡_

<br>

[@igorskyflyer/strip-headings](https://www.npmjs.com/package/@igorskyflyer/strip-headings)

> _⛸ Strips Markdown headings!🏹_

<br>

[@igorskyflyer/mp3size](https://www.npmjs.com/package/@igorskyflyer/mp3size)

> _🧮 Calculates an estimated file size of Mp3 files. 🎶_

<br>

[@igorskyflyer/normalized-string](https://www.npmjs.com/package/@igorskyflyer/normalized-string)

> _💊 NormalizedString provides you with a String type with consistent line-endings, guaranteed. 📮_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
