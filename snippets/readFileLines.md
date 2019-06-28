### readFileLines

Returns an array of lines from the specified file.

返回一个从指定文件中读取的行数组。

Use `readFileSync` function in `fs` node package to create a `Buffer` from a file.
convert buffer to string using `toString(encoding)` function.
creating an array from contents of file by `split`ing file content line by line (each `\n`).

使用`fs`node包中的`readFileSync`函数从文件创建一个`Buffer`。用`toString(encoding)`函数把buffer转到字符串。通过把文件内容一行一行（每`\n`）的`split`开，创建一个文件内容的数组。

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

