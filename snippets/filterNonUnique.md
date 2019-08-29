---
title: filterNonUnique
tags: array,beginner
---

Filters out the non-unique values in an array.

过滤掉数组中不唯一的数。

Use `Array.prototype.filter()` for an array containing only the unique values.

使用`Array.prototype.filter()`过滤出一个只包含唯一值得数组。

```js
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
```

```js
filterNonUnique([1, 2, 2, 3, 4, 4, 5]); // [1, 3, 5]
```