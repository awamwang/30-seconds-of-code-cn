---
title: differenceWith
tags: array,function,intermediate
---

Filters out all values from an array for which the comparator function does not return `true`.

过滤出所有被比较函数`comp`判断为不相等的元素。

- Use `Array.prototype.filter()` and `Array.prototype.findIndex()` to find the appropriate values.

使用`Array.prototype.filter()` 和 `Array.prototype.findIndex()`来找到符合条件的值。

```js
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);
```

```js
differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)); // [1, 1.2]
```