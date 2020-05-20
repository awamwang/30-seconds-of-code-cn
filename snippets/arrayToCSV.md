---
title: arrayToCSV
tags: array,string,intermediate
---

Converts a 2D array to a comma-separated values (CSV) string.

把二维数组转换为点分形式（CSV）字符串。

Use `Array.prototype.map()` and `Array.prototype.join(delimiter)` to combine individual 1D arrays (rows) into strings.
Use `Array.prototype.join('\n')` to combine all rows into a CSV string, separating each row with a newline.
Omit the second argument, `delimiter`, to use a default delimiter of `,`.

使用`Array.prototype.map()`和`Array.prototype.join(delimiter)`把单独的一维数组（行）连接成字符串。使用`Array.prototype.join('\n')`来把所有行连接成CSV字符串，每行使用换行符分隔。如果不传第二参数`delimiter`，使用`,`作为默认值。

```js
const arrayToCSV = (arr, delimiter = ',') =>
  arr
    .map(v => v.map(x => (isNaN(x) ? `"${x.replace(/"/g, '""')}"` : x)).join(delimiter))
    .join('\n'); // 先把数字转字符串；再把每行的字符串拼接；再把每一行拼接（其中的“"”按照CSV的规则进行转义）
```

```js
arrayToCSV([
  ['a', 'b'],
  ['c', 'd']
]); // '"a","b"\n"c","d"'
arrayToCSV(
  [
    ['a', 'b'],
    ['c', 'd']
  ],
  ';'
); // '"a";"b"\n"c";"d"'
arrayToCSV([
  ['a', '"b" great'],
  ['c', 3.1415]
]); // '"a","""b"" great"\n"c",3.1415'
```
