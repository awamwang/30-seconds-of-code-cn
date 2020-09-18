---
title: isNegativeZero
tags: math,beginner
---

Checks if the given value is equal to negative zero (`-0`).

检查给出的值是否与负数0相等(`-0`)。

- Checks whether a passed value is equal to `0` and if `1` divided by the value equals `-Infinity`.

检查传入的是否等于`0`，并且`1`被这个值除是否等于`-Infinity`。

```js
const isNegativeZero = val => val === 0 && 1 / val === -Infinity;
```

```js
isNegativeZero(-0); // true
isNegativeZero(0); // false
```
