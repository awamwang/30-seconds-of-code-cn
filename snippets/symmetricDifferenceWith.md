---
title: symmetricDifferenceWith
tags: array,function,intermediate
---

Returns the symmetric difference between two arrays, using a provided function as a comparator.

使用给定的函数作为比较器，返回两个数组中全部的差异（每个数组中不存在在对方中的元素合集）。

Use `Array.prototype.filter()` and `Array.prototype.findIndex()` to find the appropriate values.

使用`Array.prototype.filter()` 和 `Array.prototype.findIndex()`来找到合适的元素。

```js
const symmetricDifferenceWith = (arr, val, comp) => [
  ...arr.filter(a => val.findIndex(b => comp(a, b)) === -1),
  ...val.filter(a => arr.findIndex(b => comp(a, b)) === -1)
];
```

```js
symmetricDifferenceWith(
  [1, 1.2, 1.5, 3, 0],
  [1.9, 3, 0, 3.9],
  (a, b) => Math.round(a) === Math.round(b)
); // [1, 1.2, 3.9]
```