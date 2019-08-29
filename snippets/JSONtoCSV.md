---
title: JSONtoCSV
tags: array,string,object,advanced
---

Converts an array of objects to a comma-separated values (CSV) string that contains only the `columns` specified.

把一个对象数组转换为只包含`columns`中的列（对应objects中的属性名）的点分(CSV)字符串。

Use `Array.prototype.join(delimiter)` to combine all the names in `columns` to create the first row.
Use `Array.prototype.map()` and `Array.prototype.reduce()` to create a row for each object, substituting non-existent values with empty strings and only mapping values in `columns`.
Use `Array.prototype.join('\n')` to combine all rows into a string.
Omit the third argument, `delimiter`, to use a default delimiter of `,`.

使用`Array.prototype.join(delimiter)`来连结`columns`中所有属性名来创建第一行。使用`Array.prototype.map()`和`Array.prototype.reduce()`来为每个对象创建一行，不存在的值使用空字符串替代。使用`Array.prototype.join('\n')`来把所有上面的行连结成字符串。如果不传第三个参数`delimiter`，默认值为`,`。

```js
const JSONtoCSV = (arr, columns, delimiter = ',') =>
  [
    columns.join(delimiter),
    ...arr.map(obj =>
      columns.reduce(
        (acc, key) => `${acc}${!acc.length ? '' : delimiter}"${!obj[key] ? '' : obj[key]}"`,
        ''
      )
    )
  ].join('\n');
```

```js
JSONtoCSV([{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }], ['a', 'b']); // 'a,b\n"1","2"\n"3","4"\n"6",""\n"","7"'
JSONtoCSV([{ a: 1, b: 2 }, { a: 3, b: 4, c: 5 }, { a: 6 }, { b: 7 }], ['a', 'b'], ';'); // 'a;b\n"1";"2"\n"3";"4"\n"6";""\n"";"7"'
```