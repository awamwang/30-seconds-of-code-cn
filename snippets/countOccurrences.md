---
title: countOccurrences
tags: array,intermediate
---

Counts the occurrences of a value in an array.

计算一个数组中某个`val`出现的次数。

Use `Array.prototype.reduce()` to increment a counter each time you encounter the specific value inside the array.

使用`Array.prototype.reduce()`来遍历数组，每次指定的值出现时增加计数。

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
```

```js
countOccurrences([1, 1, 2, 1, 2, 3], 1); // 3
```