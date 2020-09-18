---
title: averageBy
tags: math,array,function,intermediate
---

Returns the average of an array, after mapping each element to a value using the provided function.

把每个元素使用给出的函数映射到一个值，返回值数组的平均值。

- Use `Array.prototype.map()` to map each element to the value returned by `fn`, `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.

使用`Array.prototype.map()`来把每个元素映射到`fn`返回的值，使用`Array.prototype.reduce()`来把每个返回的值添加到累加器中，初始累计值为`0`，最后除以数组的长度`length`。

```js
const averageBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
  arr.length;
```

```js
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
```
