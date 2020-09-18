---
title: pipeAsyncFunctions
tags: function,promise,intermediate
---

Performs left-to-right function composition for asynchronous functions.

为异步函数列表产生一个从左向右执行的函数组合。

- Use `Array.prototype.reduce()` and the spread operator (`...`) to perform function composition using `Promise.then()`.
- The functions can return a combination of normal values, `Promise`s or be `async`, returning through `await`.
- All functions must accept a single argument.

使用`Array.prototype.reduce()`和展开操作符(`...`) 来执行 `Promise.then()`的函数组合。这些函数可以返回以下结果类型：简单值，`Promise`s，或者通过`await`执行的`async`函数。
所有函数必须是接受一个参数的。

```js
const pipeAsyncFunctions = (...fns) => arg => fns.reduce((p, f) => p.then(f), Promise.resolve(arg));
```

```js
const sum = pipeAsyncFunctions(
  x => x + 1,
  x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
  x => x + 3,
  async x => (await x) + 4
);
(async () => {
  console.log(await sum(5)); // 15 (after one second)
})();
```
