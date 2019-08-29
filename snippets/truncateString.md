---
title: truncateString
tags: string,beginner
---

Truncates a string up to a specified length.

把字符串截断到最多指定的长度。

Determine if the string's `length` is greater than `num`.
Return the string truncated to the desired length, with `'...'` appended to the end or the original string.

判断字符串的`length`是否大于`num`。返回一个按指定长度截断并加上`'...'`后缀的字符串，或者原始的字符串。

```js
const truncateString = (str, num) =>
  str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;
```

```js
truncateString('boomerang', 7); // 'boom...'
```