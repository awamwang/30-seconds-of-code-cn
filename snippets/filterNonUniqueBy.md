---
title: filterNonUniqueBy
tags: array,function,intermediate
---

Filters out the non-unique values in an array, based on a provided comparator function.

过滤掉数组中不唯一的数，唯一性通过给定的对比函数判断。

- Use `Array.prototype.filter()` and `Array.prototype.every()` for an array containing only the unique values, based on the comparator function, `fn`.
- The comparator function takes four arguments: the values of the two elements being compared and their indexes.

使用`Array.prototype.filter()` 和 `Array.prototype.every()`来创建一个只包含基于比较函数`fn`判定为唯一值的数组。比较函数有四个参数：两个比较的元素和他们的序号（index）。

```js
const filterNonUniqueBy = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));
```

```js
filterNonUniqueBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
); // [ { id: 2, value: 'c' } ]
```
