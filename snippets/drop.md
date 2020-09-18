---
title: drop
tags: array,beginner
---

Returns a new array with `n` elements removed from the left.

返回一个删除前`n`个元素后的数组。

- Use `Array.prototype.slice()` to remove the specified number of elements from the left.

使用`Array.prototype.slice()`来把指定数量的元素从数组左端删掉（返回剩余数组）。

```js
const drop = (arr, n = 1) => arr.slice(n);
```

```js
drop([1, 2, 3]); // [2,3]
drop([1, 2, 3], 2); // [3]
drop([1, 2, 3], 42); // []
```