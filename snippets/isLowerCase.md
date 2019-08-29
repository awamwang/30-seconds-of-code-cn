---
title: isLowerCase
tags: string,utility,beginner
---

Checks if a string is lower case.

检测一个字符串是否为小写格式。

Convert the given string to lower case, using `String.toLowerCase()` and compare it to the original.

使用`String.toLowerCase()`把给定的字符串转换为小写格式，并把它和原始字符串比较。

```js
const isLowerCase = str => str === str.toLowerCase();
```

```js
isLowerCase('abc'); // true
isLowerCase('a3@$'); // true
isLowerCase('Ab4'); // false
```