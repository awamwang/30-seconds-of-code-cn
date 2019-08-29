---
title: coalesce
tags: utility,beginner
---

Returns the first non-null/undefined argument.

返回第一个不是null/undefined的参数。

Use `Array.prototype.find()` to return the first non `null`/`undefined` argument.

使用`Array.prototype.find()`来返回第一个非`null`/`undefined`参数。

```js
const coalesce = (...args) => args.find(_ => ![undefined, null].includes(_));
```

```js
coalesce(null, undefined, '', NaN, 'Waldo'); // ""
```