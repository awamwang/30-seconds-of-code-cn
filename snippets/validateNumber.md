---
title: validateNumber
tags: math,intermediate
---

Returns `true` if the given value is a number, `false` otherwise.

如果给出的值是一个数字则返回`true`，否则返回`false`。

- Use `!isNaN()` in combination with `parseFloat()` to check if the argument is a number.
- Use `isFinite()` to check if the number is finite.
- Use `Number()` to check if the coercion holds.

使用`!isNaN()`和`parseFloat()`来检查这个参数是否是一个数字。使用`isFinite()`来检查这个数字是否是有穷尽的。使用`Number()`来检查是否强制持有（是否为转换后为`Number`？）。

```js
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;
```

```js
validateNumber('10'); // true
```
