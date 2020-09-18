---
title: isDivisible
tags: math,beginner
---

Checks if the first numeric argument is divisible by the second one.

检查第一个数字参数是否能被第二个整除。

- Use the modulo operator (`%`) to check if the remainder is equal to `0`.

使用取余操作符(`%`)检查余数是否为`0`。

```js
const isDivisible = (dividend, divisor) => dividend % divisor === 0;
```

```js
isDivisible(6, 3); // true
```
