---
title: converge
tags: function,intermediate
---

Accepts a converging function and a list of branching functions and returns a function that applies each branching function to the arguments and the results of the branching functions are passed as arguments to the converging function.

接受一个聚合函数和一个分支函数列表并返回一个把每个分支函数应用到参数列表的函数，分支函数列表的结果列表被作为参数传给聚合函数。

- Use `Array.prototype.map()` and `Function.prototype.apply()` to apply each function to the given arguments.
- Use the spread operator (`...`) to call `coverger` with the results of all other functions.

使用`Array.prototype.map()`和`Function.prototype.apply()`来对给定的参数执行每个函数。使用展开操作符(`...`)来对其他函数的结果列表调用`coverger`。

```js
const converge = (converger, fns) => (...args) => converger(...fns.map(fn => fn.apply(null, args)));
// 返回结果是一个函数，这个函数接受的参数传给分支函数，每个分支函数处理后把结果列表作为聚合函数的参数。
```

```js
const average = converge((a, b) => a / b, [
  arr => arr.reduce((a, v) => a + v, 0),
  arr => arr.length
]);
average([1, 2, 3, 4, 5, 6, 7]); // 4
```
