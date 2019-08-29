---
title: transform
tags: object,array,intermediate
---

Applies a function against an accumulator and each key in the object (from left to right).

对一个累加器和一个对象中每个键应用一个函数（从左到右）。

Use `Object.keys(obj)` to iterate over each key in the object, `Array.prototype.reduce()` to call the apply the specified function against the given accumulator.

使用`Object.keys(obj)`来遍历对象中每个键，`Array.prototype.reduce()`来对给出的累加器调用指定的函数（使用这个函数对对象中的键值进行累加操作）。

```js
const transform = (obj, fn, acc) => Object.keys(obj).reduce((a, k) => fn(a, obj[k], k, obj), acc);
```

```js
transform(
  { a: 1, b: 2, c: 1 },
  (r, v, k) => {
    (r[v] || (r[v] = [])).push(k);
    return r;
  },
  {}
); // { '1': ['a', 'c'], '2': ['b'] }
```