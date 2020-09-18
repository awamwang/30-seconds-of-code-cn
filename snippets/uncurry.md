---
title: uncurry
tags: function,intermediate
---

Uncurries a function up to depth `n`.

去柯里化一个函数，最大处理深度为`n`。

- Return a variadic function.
- Use `Array.prototype.reduce()` on the provided arguments to call each subsequent curry level of the function.
- If the `length` of the provided arguments is less than `n` throw an error.
- Otherwise, call `fn` with the proper amount of arguments, using `Array.prototype.slice(0, n)`.
- Omit the second argument, `n`, to uncurry up to depth `1`.

返回一个参数数目不确定的函数。对给定的参数列表使用`Array.prototype.reduce()`来调用这个函数的每个柯里化的层级。如果给定参数列表的`length`比`n`小则抛出异常。否则使用`Array.prototype.slice(0, n)`获取合适数目的参数列表来调用`fn`。如果不传第二个参数`n`，则最大去柯里化深度为`1`。

```js
const uncurry = (fn, n = 1) => (...args) => {
  const next = acc => args => args.reduce((x, y) => x(y), acc);
  if (n > args.length) throw new RangeError('Arguments too few!');
  return next(fn)(args.slice(0, n));
};
```

```js
const add = x => y => z => x + y + z;
const uncurriedAdd = uncurry(add, 3);
uncurriedAdd(1, 2, 3); // 6
```
