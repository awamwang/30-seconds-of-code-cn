---
title: reduceSuccessive
tags: array,function,intermediate
---

Applies a function against an accumulator and each element in the array (from left to right), returning an array of successively reduced values.

对一个累加器和数组中每一个元素应用给定函数（从左向右），返回每一步累加值组成的数组。

- Use `Array.prototype.reduce()` to apply the given function to the given array, storing each new result.

使用`Array.prototype.reduce()`来对给定的数组应用给定的函数，存储每一次新的累加结果。

```js
const reduceSuccessive = (arr, fn, acc) =>
  arr.reduce((res, val, i, arr) => (res.push(fn(res.slice(-1)[0], val, i, arr)), res), [acc]);
```

```js
reduceSuccessive([1, 2, 3, 4, 5, 6], (acc, val) => acc + val, 0); // [0, 1, 3, 6, 10, 15, 21]
```
