---
title: when
tags: function,intermediate
---

Tests a value, `x`, against a predicate function. If `true`, return `fn(x)`. Else, return `x`.

用断言函数测试一个值`x`。如果结构为`true`则返回`fn(x)`,否则返回`x`。

- Return a function expecting a single value, `x`, that returns the appropriate value based on `pred`.

返回一个接收一个值`x`，并且根据`pred`决定合适的返回值的函数。

```js
const when = (pred, whenTrue) => x => (pred(x) ? whenTrue(x) : x);
```

```js
const doubleEvenNumbers = when(
  x => x % 2 === 0,
  x => x * 2
);
doubleEvenNumbers(2); // 4
doubleEvenNumbers(1); // 1
```
