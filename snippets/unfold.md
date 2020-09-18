---
title: unfold
tags: function,array,intermediate
---

Builds an array, using an iterator function and an initial seed value.

使用一个遍历函数或者一个初始种子值来创建一个数组。

- Use a `while` loop and `Array.prototype.push()` to call the function repeatedly until it returns `false`.
- The iterator function accepts one argument (`seed`) and must always return an array with two elements ([`value`, `nextSeed`]) or `false` to terminate.

使用一个`while`循环和`Array.prototype.push()`来重复调用函数直到它返回`false`。这个遍历函数接收一个参数（`seed`）并且必须返回一个具有两个元素的数组（[`value`, `nextSeed`]）或者返回`false`来结束迭代。

```js
const unfold = (fn, seed) => {
  let result = [],
    val = [null, seed];
  while ((val = fn(val[1]))) result.push(val[0]);
  return result;
};
```

```js
var f = n => (n > 50 ? false : [-n, n + 10]);
unfold(f, 10); // [-10, -20, -30, -40, -50]
```
