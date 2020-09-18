---
title: compose
tags: function,intermediate
---

Performs right-to-left function composition.

执行从右到左的函数复合（嵌套的函数调用）。

- Use `Array.prototype.reduce()` to perform right-to-left function composition.
- The last (rightmost) function can accept one or more arguments; the remaining functions must be unary.

使用`Array.prototype.reduce()`来执行从右到左的函数复合。最后（最右边）的函数可以接收一个或多个参数；剩余的函数必须是一元的。

```js
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
```

```js
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = compose(add5, multiply);
multiplyAndAdd5(5, 2); // 15
```
