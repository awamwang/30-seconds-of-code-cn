---
title: isUpperCase
tags: string,beginner
---

Checks if a string is upper case.

检测一个字符串是否为大写格式。

Convert the given string to upper case, using `String.prototype.toUpperCase()` and compare it to the original.

使用`String.toLowerCase()`把给定的字符串转换为大写格式，并把它和原始字符串比较。

```js
const isUpperCase = str => str === str.toUpperCase();
```

```js
isUpperCase('ABC'); // true
isUpperCase('A3@$'); // true
isUpperCase('aB4'); // false
```
