---
title: pipeFunctions
tags: adapter,function,intermediate
---

Performs left-to-right function composition.

从左向右执行一个函数组合。

Use `Array.prototype.reduce()` with the spread operator (`...`) to perform left-to-right function composition.
The first (leftmost) function can accept one or more arguments; the remaining functions must be unary.

使用`Array.prototype.reduce()`和展开操作符(`...`) 来从左向右执行函数组合。第一个（最左边）的函数可以接受一个或多个参数；剩下的函数必须是一元的（接受一个参数）。

```js
const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args))); // 把前一个函数的返回值作为当前函数的参数
```

```js
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = pipeFunctions(multiply, add5);
multiplyAndAdd5(5, 2); // 15
```