---
title: symmetricDifference
tags: array,math,intermediate
---

Returns the symmetric difference between two arrays, without filtering out duplicate values.

不过滤掉重复元素，返回两个数组中全部的差异（每个数组中不存在在对方中的元素合集）。

- Create a `Set` from each array, then use `Array.prototype.filter()` on each of them to only keep values not contained in the other.

从给定的两个数组创建一个`Set`，然后对它们分别使用`Array.prototype.filter()`来只保留不包含在另一个数组中的元素。

```js
const symmetricDifference = (a, b) => {
  const sA = new Set(a),
    sB = new Set(b);
  return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
};
```

```js
symmetricDifference([1, 2, 3], [1, 2, 4]); // [3, 4]
symmetricDifference([1, 2, 2], [1, 3, 1]); // [2, 2, 3]
```
