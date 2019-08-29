---
title: gcd
tags: math,recursion,beginner
---

Calculates the greatest common divisor between two or more numbers/arrays.

计算两个或多个数组或数组的最大公因数。

The inner `_gcd` function uses recursion.
Base case is when `y` equals `0`. In this case, return `x`.
Otherwise, return the GCD of `y` and the remainder of the division `x/y`.

内部的`_gcd`函数使用递归。基本情况是当`y`等于`0`，这种情况返回`x`。否则返回`y`的GCD和`x/y`的余数。

```js
const gcd = (...arr) => {
  const _gcd = (x, y) => (!y ? x : gcd(y, x % y));
  return [...arr].reduce((a, b) => _gcd(a, b));
};
```

```js
gcd(8, 36); // 4
gcd(...[12, 8, 32]); // 4
```