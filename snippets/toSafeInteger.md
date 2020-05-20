---
title: toSafeInteger
tags: math,beginner
---

Converts a value to a safe integer.

把一个值转换为安全整数。

Use `Math.max()` and `Math.min()` to find the closest safe value.
Use `Math.round()` to convert to an integer.

使用`Math.max()`和`Math.min()`来找到最近的安全值。使用`Math.round()`把它转换为一个整数。

```js
const toSafeInteger = num =>
  Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));
```

```js
toSafeInteger('3.2'); // 3
toSafeInteger(Infinity); // 9007199254740991
```
