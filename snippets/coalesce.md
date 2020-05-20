---
title: coalesce
tags: type,beginner
---

Returns the first defined, non-null argument.

返回第一个不是null/undefined的参数。

Use `Array.prototype.find()` and `Array.prototype.includes()` to find the first value that is not equal to `undefined` or `null`.

使用`Array.prototype.find()`和`Array.prototype.includes()`来找到第一个不等于`null`或`undefined`的值。

```js
const coalesce = (...args) => args.find(v => ![undefined, null].includes(v));
```

```js
coalesce(null, undefined, '', NaN, 'Waldo'); // ''
```
