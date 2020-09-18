---
title: readFileLines
tags: node,array,string,beginner
---

Returns an array of lines from the specified file.

返回一个从指定文件中读取的行数组。

- Use `readFileSync` function in `fs` node package to create a `Buffer` from a file.
- Convert buffer to string using `toString(encoding)` function.
- Use `split(\n)` to create an array of lines from the contents of the file.

- 使用`fs`node包中的`readFileSync`函数从文件创建一个`Buffer`。
- 用`toString(encoding)`函数把buffer转到字符串。
- 使用`split(\n)`从文件内容创建一个行数组。

```js
const fs = require('fs');
const readFileLines = filename =>
  fs
    .readFileSync(filename)
    .toString('UTF8')
    .split('\n');
```

```js
/*
contents of test.txt :
  line1
  line2
  line3
  ___________________________
*/
let arr = readFileLines('test.txt');
console.log(arr); // ['line1', 'line2', 'line3']
```
