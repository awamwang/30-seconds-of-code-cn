---
title: unionBy
tags: array,function,intermediate
---

Returns every element that exists in any of the two arrays once, after applying the provided function to each array element of both.

对两个数组中每个元素应用给定的函数后，返回所有结果中元素只出现一次所构成的数组（具有集合不重复的特性）。

Create a `Set` by applying all `fn` to all values of `a`.
Create a `Set` from `a` and all elements in `b` whose value, after applying `fn` does not match a value in the previously created set.
Return the last set converted to an array.

用对`a`中所有值应用`fn`后的结果创建一个`Set`。用`a`和`b`中所有应用`fn`后结果不在之前的`Set`的元素创建另一`Set`。返回后一个`Set`转换为数组后的结果。

```js
const unionBy = (a, b, fn) => {
  const s = new Set(a.map(fn));
  return Array.from(new Set([...a, ...b.filter(x => !s.has(fn(x)))]));
};
```

```js
unionBy([2.1], [1.2, 2.3], Math.floor); // [2.1, 1.2]
unionBy([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }], x => x.id) // [{ id: 1 }, { id: 2 }, { id: 3 }]
```
