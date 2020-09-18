---
title: over
tags: function,intermediate
---

Creates a function that invokes each provided function with the arguments it receives and returns the results.

创建一个函数，它用接收的参数列表调用每个给定的函数，并返回结果列表。

- Use `Array.prototype.map()` and `Function.prototype.apply()` to apply each function to the given arguments.

使用`Array.prototype.map()` 和 `Function.prototype.apply()`来把接收的参数列表应用给每个给定的函数。

```js
const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
```

```js
const minMax = over(Math.min, Math.max);
minMax(1, 2, 3, 4, 5); // [1,5]
```
