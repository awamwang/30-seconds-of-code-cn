---
title: composeRight
tags: function,intermediate
---

Performs left-to-right function composition.

执行从左到右的函数复合（嵌套的函数调用）。

- Use `Array.prototype.reduce()` to perform left-to-right function composition.
- The first (leftmost) function can accept one or more arguments; the remaining functions must be unary.

使用`Array.prototype.reduce()`来执行从左到右的函数组合。第一个（最左边）的函数可以接收一个或多个参数；剩余的函数必须是一元的。

```js
const composeRight = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
```

```js
const add = (x, y) => x + y;
const square = x => x * x;
const addAndSquare = composeRight(add, square);
addAndSquare(1, 2); // 9
```
