---
title: intersectionWith
tags: array,function,intermediate
---

Returns a list of elements that exist in both arrays, using a provided comparator function.

返回两个数组公共元素组成的元素列表，通过给定的比较函数`comp`来判断元素是否相同。

Use `Array.prototype.filter()` and `Array.prototype.findIndex()` in combination with the provided comparator to determine intersecting values.

使用`Array.prototype.filter()` 和 `Array.prototype.findIndex()`，结合给定的比较函数判断是否公共值。

```js
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);
```

```js
intersectionWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0, 3.9], (a, b) => Math.round(a) === Math.round(b)); // [1.5, 3, 0]
```