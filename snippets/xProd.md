---
title: xProd
tags: array,math,intermediate
---

Creates a new array out of the two supplied by creating each possible pair from the arrays.

通过创建数组列表中每个可能的元素组合，从给出的两个数组创建一个新列表。

- Use `Array.prototype.reduce()`, `Array.prototype.map()` and `Array.prototype.concat()` to produce every possible pair from the elements of the two arrays and save them in an array.

使用`Array.prototype.reduce()`, `Array.prototype.map()` 和 `Array.prototype.concat()`来从给定的两个数组中产生每种可能的元素组合，然后把它们保存到一个数组中。

```js
const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);
```

```js
xProd([1, 2], ['a', 'b']); // [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
```
