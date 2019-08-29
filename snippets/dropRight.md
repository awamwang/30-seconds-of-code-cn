---
title: dropRight
tags: array,beginner
---

Returns a new array with `n` elements removed from the right.

返回一个删除右边`n`个元素后的数组。

Use `Array.prototype.slice()` to remove the specified number of elements from the right.

使用`Array.prototype.slice()`来把指定数量的元素从数组右端删掉（返回剩余数组）

```js
const dropRight = (arr, n = 1) => arr.slice(0, -n);
```

```js
dropRight([1, 2, 3]); // [1,2]
dropRight([1, 2, 3], 2); // [1]
dropRight([1, 2, 3], 42); // []
```