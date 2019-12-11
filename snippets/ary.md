---
title: ary
tags: adapter,function,intermediate
---

Creates a function that accepts up to `n` arguments, ignoring any additional arguments.

创建一个最多`n`个参数的函数，它会忽略其他参数。

Call the provided function, `fn`, with up to `n` arguments, using `Array.prototype.slice(0, n)` and the spread operator (`...`).

使用`Array.prototype.slice(0, n)`和展开操作符(`...`)提取最多`n`个参数，传给`fn`并调用。

```js
const ary = (fn, n) => (...args) => fn(...args.slice(0, n));
```

```js
const firstTwoMax = ary(Math.max, 2);
[[2, 6, 'a'], [6, 4, 8], [10]].map(x => firstTwoMax(...x)); // [6, 6, 10]
```
