---
title: initializeNDArray
tags: array,recursion,intermediate
---

Create a n-dimensional array with given value.

使用给定值创建一个n维数组。

- Use recursion.
- Use `Array.prototype.map()` to generate rows where each is a new array initialized using `initializeNDArray`.

使用递归。使用`Array.prototype.map()`来生成由`initializeNDArray`初始化的每一行。

```js
const initializeNDArray = (val, ...args) =>
  args.length === 0
    ? val
    : Array.from({ length: args[0] }).map(() => initializeNDArray(val, ...args.slice(1)));
```

```js
initializeNDArray(1, 3); // [1,1,1]
initializeNDArray(5, 2, 2, 2); // [[[5,5],[5,5]],[[5,5],[5,5]]]
```
