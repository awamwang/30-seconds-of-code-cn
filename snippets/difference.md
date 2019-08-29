---
title: difference
tags: array,math,beginner
---

Returns the difference between two arrays.

返回两个数组中不同的元素。

Create a `Set` from `b`, then use `Array.prototype.filter()` on `a` to only keep values not contained in `b`.

从数组`b`创建一个`Set`，然后对数组`a`使用`Array.prototype.filter()`来过滤出不在`b`中的元素。

```js
const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
};
```

```js
difference([1, 2, 3], [1, 2, 4]); // [3]
```