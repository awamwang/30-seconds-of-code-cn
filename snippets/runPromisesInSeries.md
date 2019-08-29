---
title: runPromisesInSeries
tags: function,promise,intermediate
---

Runs an array of promises in series.

按顺序执行一个promise的数组。

Use `Array.prototype.reduce()` to create a promise chain, where each promise returns the next promise when resolved.

使用`Array.prototype.reduce()`来创建一个每个prosmise解决后返回下一个promise的promise链。

```js
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());
```

```js
const delay = d => new Promise(r => setTimeout(r, d));
runPromisesInSeries([() => delay(1000), () => delay(2000)]); // Executes each promise sequentially, taking a total of 3 seconds to complete
```