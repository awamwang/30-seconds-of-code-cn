---
title: lcm
tags: math,recursion,beginner
---

Returns the least common multiple of two or more numbers.

返回两个或多个数字的最小公倍数。

Use the greatest common divisor (GCD) formula and the fact that `lcm(x,y) = x * y / gcd(x,y)` to determine the least common multiple.
The GCD formula uses recursion.

使用最大公因数（GCD）和因子`lcm(x,y) = x * y / gcd(x,y)`来判断最小公倍数。GCD的公式使用递归。

```js
const lcm = (...arr) => {
  const gcd = (x, y) => (!y ? x : gcd(y, x % y));
  const _lcm = (x, y) => (x * y) / gcd(x, y);
  return [...arr].reduce((a, b) => _lcm(a, b));
};
```

```js
lcm(12, 7); // 84
lcm(...[1, 3, 4, 5]); // 60
```