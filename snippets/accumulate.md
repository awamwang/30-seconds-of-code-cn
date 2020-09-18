---
title: accumulate
tags: math,array,beginner
---

Returns an array of partial sums.

返回部分和数组。

- Use `Array.prototype.reduce()`, `Array.prototype.slice(-1)` and the unary `+` operator to add each value to the unary array containing the previous sum.

- 使用`Array.prototype.reduce()`，`Array.prototype.slice(-1)`和一元运算符`+`将每个值添加到包含先前和的一元数组中。

```js
const accumulate = (...nums) => nums.reduce((acc, n) => [...acc, n + +acc.slice(-1)], []);
```

```js
accumulate(1, 2, 3, 4); // [1, 3, 6, 10]
accumulate(...[1, 2, 3, 4]); // [1, 3, 6, 10]
```
