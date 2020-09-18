---
title: unary
tags: function,beginner
---

Creates a function that accepts up to one argument, ignoring any additional arguments.

创建一个最多接受一个参数的函数，忽略其他参数。

- Call the provided function, `fn`, with just the first argument given.

仅使用给出参数的第一个调用函数`fn`。

```js
const unary = fn => val => fn(val);
```

```js
['6', '8', '10'].map(unary(parseInt)); // [6, 8, 10]
```
