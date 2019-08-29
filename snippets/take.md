---
title: take
tags: array,beginner
---

Returns an array with n elements removed from the beginning.

返回一个由头部`n`个元素构成的数组。

Use `Array.prototype.slice()` to create a slice of the array with `n` elements taken from the beginning.

使用`Array.prototype.slice()`来用头部的`n`个元素创建一个数组的切片。

```js
const take = (arr, n = 1) => arr.slice(0, n);
```

```js
take([1, 2, 3], 5); // [1, 2, 3]
take([1, 2, 3], 0); // []
```