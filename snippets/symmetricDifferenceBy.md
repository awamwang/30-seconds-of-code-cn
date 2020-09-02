---
title: symmetricDifferenceBy
tags: array,function,intermediate
---

Returns the symmetric difference between two arrays, after applying the provided function to each array element of both.

基于给定的比较函数，不过滤掉重复元素，返回两个数组中全部的差异（每个数组中不存在在对方中的元素合集）。

Create a `Set` by applying `fn` to each array's elements, then use `Array.prototype.filter()` on each of them to only keep values not contained in the other.

对给定的两个数组元素应用`fn`后创建一个结果的`Set`，然后对它们分别使用`Array.prototype.filter()`来只保留不包含在另一个数组的结果中的元素。

```js
const symmetricDifferenceBy = (a, b, fn) => {
  const sA = new Set(a.map(v => fn(v))),
    sB = new Set(b.map(v => fn(v)));
  return [...a.filter(x => !sB.has(fn(x))), ...b.filter(x => !sA.has(fn(x)))];
};
```

```js
symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [ 1.2, 3.4 ]
symmetricDifferenceBy(
  [{ id: 1 }, { id: 2 }, { id: 3 }],
  [{ id: 1 }, { id: 2 }, { id: 4 }],
  i => i.id
); // [{ id: 3 }, { id: 4 }]
```
