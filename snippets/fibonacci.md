---
title: fibonacci
tags: math,array,beginner
---

Generates an array, containing the Fibonacci sequence, up until the nth term.

生成一个包含直到nth终结的斐波那契数列的数组。

- Create an empty array of the specific length, initializing the first two values (`0` and `1`).
- Use `Array.prototype.reduce()` to add values into the array, using the sum of the last two values, except for the first two.

创建一个指定长度的空数组，用(`0`和`1`)初始前两个值。使用`Array.prototype.reduce()`把最后两个值的和添加值到数组中，除了最开始两个数的。

```js
const fibonacci = n =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
```

```js
fibonacci(6); // [0, 1, 1, 2, 3, 5]
```
