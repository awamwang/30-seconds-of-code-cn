### CSVToJSON

Converts a comma-separated values (CSV) string to a 2D array of objects.
The first row of the string is used as the title row.

将一个逗号分隔值（CSV）字符串转为对象的二维数组。字符串的第一行用作标题行。

Use `Array.prototype.slice()` and `Array.prototype.indexOf('\n')` and `String.prototype.split(delimiter)` to separate the first row (title row) into values.
Use `String.prototype.split('\n')` to create a string for each row, then `Array.prototype.map()` and `String.prototype.split(delimiter)` to separate the values in each row.
Use `Array.prototype.reduce()` to create an object for each row's values, with the keys parsed from the title row.
Omit the second argument, `delimiter`, to use a default delimiter of `,`.

使用`Array.prototype.slice()`和`Array.prototype.indexOf('\n')`还有`String.prototype.split(delimiter)`来把第一行（标题行）转为值列表。使用`String.prototype.split('\n')`来为每一行创建一个字符串，然后用`Array.prototype.map()`和`String.prototype.split(delimiter)`来拆分每一行的值。使用`Array.prototype.reduce()` 来为每一行的值创建一个对象，它的键解析自CSV字符串的标题行。如果不传第二个参数`delimiter`，默认值为`,`。

```js
const CSVToJSON = (data, delimiter = ',') => {
  const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
  return data
    .slice(data.indexOf('\n') + 1)
    .split('\n')
    .map(v => {
      const values = v.split(delimiter);
      return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
    });
};
```

```js
CSVToJSON('col1,col2\na,b\nc,d'); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
CSVToJSON('col1;col2\na;b\nc;d', ';'); // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
```
