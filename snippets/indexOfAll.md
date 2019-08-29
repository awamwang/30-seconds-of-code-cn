---
title: indexOfAll
tags: array,intermediate
---

Returns all indices of `val` in an array.
If `val` never occurs, returns `[]`.

返回数组中所有`val`的序号列表。如果`val`没有出现，返回`[]`。

Use `Array.prototype.reduce()` to loop over elements and store indices for matching elements.
Return the array of indices.

使用`Array.prototype.reduce()`来遍历元素并把序号存到相应的列表中。返回序号数组。

```js
const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
```

```js
indexOfAll([1, 2, 3, 1, 2, 3], 1); // [0,3]
indexOfAll([1, 2, 3], 4); // []
```