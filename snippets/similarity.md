---
title: similarity
tags: array,math,beginner
---

Returns an array of elements that appear in both arrays.

返回出现在两个数组中的公共元素组成的数组。

- Use `Array.prototype.filter()` to remove values that are not part of `values`, determined using `Array.prototype.includes()`.

使用`Array.prototype.filter()`来删除不在`values`中的元素（通过`Array.prototype.includes()`来判断是否存在）。

```js
const similarity = (arr, values) => arr.filter(v => values.includes(v));
```

```js
similarity([1, 2, 3], [1, 2, 4]); // [1, 2]
```
