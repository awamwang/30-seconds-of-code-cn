---
title: curry
tags: function,recursion,intermediate
---

Curries a function.

柯里化一个函数。

Use recursion.
If the number of provided arguments (`args`) is sufficient, call the passed function `fn`.
Otherwise, return a curried function `fn` that expects the rest of the arguments.
If you want to curry a function that accepts a variable number of arguments (a variadic function, e.g. `Math.min()`), you can optionally pass the number of arguments to the second parameter `arity`.

使用递归。如果给定参数列表(`args`)的个数是足够的，则使用它们调用传入的函数`fn`。否则返回一个接收剩余参数的柯里化的函数`fn`。如果你想柯里化一个接受可变数目参数的函数（可变参数函数, 例如`Math.min()`），你可以可选的传入参数列表的长度到第二个参数`arity`。

```js
const curry = (fn, arity = fn.length, ...args) =>
  // fn.length可以取得fn的参数数目
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args); // 已经有的参数先绑上；bind一方面绑上下文this，一方面绑参数
```

```js
curry(Math.pow)(2)(10); // 1024
curry(Math.min, 3)(10)(50)(2); // 2
```