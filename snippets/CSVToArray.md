---
title: CSVToArray
tags: string,array,intermediate
---

Converts a comma-separated values (CSV) string to a 2D array.

把一个逗号分隔值（CSV）字符串转为二维数组。

- Use `Array.prototype.slice()` and `Array.prototype.indexOf('\n')` to remove the first row (title row) if `omitFirstRow` is `true`.
- Use `String.prototype.split('\n')` to create a string for each row, then `String.prototype.split(delimiter)` to separate the values in each row.
- Omit the second argument, `delimiter`, to use a default delimiter of `,`.
- Omit the third argument, `omitFirstRow`, to include the first row (title row) of the CSV string.

如果`omitFirstRow`是`true`，则使用`Array.prototype.slice()`和`Array.prototype.indexOf('\n')`删除第一行(标题行)。使用`String.prototype.split('\n')`来为每一行创建一个字符串，然后用`String.prototype.split(delimiter)`来拆分每一行的值。如果不传第二个参数`delimiter`，默认值为`,`。如果不传第三个参数`omitFirstRow`，默认包含CSV字符串的第一行（标题行）。

```js
const CSVToArray = (data, delimiter = ',', omitFirstRow = false) =>
  data
    .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
    .split('\n')
    .map(v => v.split(delimiter));
```

```js
CSVToArray('a,b\nc,d'); // [['a','b'],['c','d']];
CSVToArray('a;b\nc;d', ';'); // [['a','b'],['c','d']];
CSVToArray('col1,col2\na,b\nc,d', ',', true); // [['a','b'],['c','d']];
```
