---
title: prettyBytes
tags: string,math,advanced
---

Converts a number in bytes to a human-readable string.

把一个字节形式的数字转换为一个人类可读字符串。

Use an array dictionary of units to be accessed based on the exponent.
Use `Number.toPrecision()` to truncate the number to a certain number of digits.
Return the prettified string by building it up, taking into account the supplied options and whether it is negative or not.
Omit the second argument, `precision`, to use a default precision of `3` digits.
Omit the third argument, `addSpace`, to add space between the number and unit by default.

使用一个根据指数来判断单位的字典数组。使用`Number.toPrecision()`来把数字截断为一个特定的位数。根据提供的选项还有它是否为负数来创建一个易读的字符串并返回。如果不传第二个参数`precision`，则使用`3`位精度作为默认值。如果不传第三个参数`addSpace`，则默认在数字和单位中间添加一个空格。

```js
const prettyBytes = (num, precision = 3, addSpace = true) => {
  const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  if (Math.abs(num) < 1) return num + (addSpace ? ' ' : '') + UNITS[0];
  const exponent = Math.min(Math.floor(Math.log10(num < 0 ? -num : num) / 3), UNITS.length - 1);
  const n = Number(((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision));
  return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent];
};
```

```js
prettyBytes(1000); // "1 KB"
prettyBytes(-27145424323.5821, 5); // "-27.145 GB"
prettyBytes(123456789, 3, false); // "123MB"
```
