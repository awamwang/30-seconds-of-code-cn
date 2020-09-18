---
title: flatten
tags: array,intermediate
---

Flattens an array up to the specified depth.

按照给定的最大深度扁平化数组。

- Use recursion, decrementing `depth` by 1 for each level of depth.
- Use `Array.prototype.reduce()` and `Array.prototype.concat()` to merge elements or arrays.
- Base case, for `depth` equal to `1` stops recursion.
- Omit the second argument, `depth` to flatten only to a depth of `1` (single flatten).

使用递归，每一层递归`depth`自减1。使用`Array.prototype.reduce()`和`Array.prototype.concat()`来合并元素列表或数组。最基本的例子——`depth`为1时就停止递归。如果不传第二个参数，`depth`默认为1(单维度的扁平化)。

```js
const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), []);
```

```js
flatten([1, [2], 3, 4]); // [1, 2, 3, 4]
flatten([1, [2, [3, [4, 5], 6], 7], 8], 2); // [1, 2, 3, [4, 5], 6, 7, 8]
```
