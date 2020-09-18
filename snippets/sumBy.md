---
title: sumBy
tags: math,array,function,intermediate
---

Returns the sum of an array, after mapping each element to a value using the provided function.

在把每个元素应用提供的函数后，返回一个数组的和。

- Use `Array.prototype.map()` to map each element to the value returned by `fn`, `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`.

使用`Array.prototype.map()`来把每个元素映射到应用`fn`的返回值，使用`Array.prototype.reduce()`来把每个值累加，初始累加值为0。

```js
const sumBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0);
```

```js
sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 20
sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 20
```