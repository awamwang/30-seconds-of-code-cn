---
title: sortCharactersInString
tags: string,beginner
---

Alphabetically sorts the characters in a string.

按字母序排序一个字符串中的字符。

- Use the spread operator (`...`), `Array.prototype.sort()` and  `String.localeCompare()` to sort the characters in `str`, recombine using `String.prototype.join('')`.

使用展开操作符(`...`), `Array.prototype.sort()`和`String.localeCompare()`来排序`str`的字符，使用`String.prototype.join('')`重新结合它们。

```js
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');
```

```js
sortCharactersInString('cabbage'); // 'aabbceg'
```
