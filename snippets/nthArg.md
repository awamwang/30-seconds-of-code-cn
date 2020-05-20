---
title: nthArg
tags: function,beginner
---

Creates a function that gets the argument at index `n`. If `n` is negative, the nth argument from the end is returned.

创建一个获取序号`n`位置上的参数的函数。如果`n`是负数，则返回倒数第n个参数。

Use `Array.prototype.slice()` to get the desired argument at index `n`.

使用`Array.prototype.slice()`来获取序号`n`位置上的所需的参数。

```js
const nthArg = n => (...args) => args.slice(n)[0];
```

```js
const third = nthArg(2);
third(1, 2, 3); // 3
third(1, 2); // undefined
const last = nthArg(-1);
last(1, 2, 3, 4, 5); // 5
```
