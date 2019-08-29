---
title: filterFalsy
tags: array,beginner
---

Filters out the falsy values in an array.

过滤掉一个数组中的假值。

Use `Array.prototype.filter()` to get an array containing only truthy values.

使用`Array.prototype.filter()`来获取一个只包含真值的数组。

```js
const filterFalsy = arr => arr.filter(Boolean);
```

```js
filterFalsy(['', true, {}, false, 'sample', 1, 0]); // [true, {}, 'sample', 1]
```