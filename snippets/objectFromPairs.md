---
title: objectFromPairs
tags: object,array,beginner
---

Creates an object from the given key-value pairs.

从给出的键值对创建一个对象。

Use `Array.prototype.reduce()` to create and combine key-value pairs.

使用`Array.prototype.reduce()`来创建一个对象，它包含了提供的键值对。

```js
const objectFromPairs = arr => arr.reduce((a, [key, val]) => ((a[key] = val), a), {});
```

```js
objectFromPairs([
  ['a', 1],
  ['b', 2]
]); // {a: 1, b: 2}
```