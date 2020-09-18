---
title: digitize
tags: math,array,beginner
---

Converts a number to an array of digits.

把一个数转换为每一位的数组。

- Convert the number to a string, using the spread operator (`...`) to build an array.
- Use `Array.prototype.map()` and `parseInt()` to transform each value to an integer.

把这个数转为一个字符串，是一种展开操作符(`...`)来创建一个数组。使用`Array.prototype.map()`和`parseInt()`来把每个值转为整数。

```js
const digitize = n => [...`${n}`].map(i => parseInt(i));
```

```js
digitize(123); // [1, 2, 3]
```