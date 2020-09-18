---
title: percentile
tags: math,intermediate
---

Uses the percentile formula to calculate how many numbers in the given array are less or equal to the given value.

使用百分号公式来计算给定的数组中有多少个数字小于等于给定的值。

- Use `Array.prototype.reduce()` to calculate how many numbers are below the value and how many are the same value and apply the percentile formula.

使用`Array.prototype.reduce()`来计算多少数字小于给定值，多少是相同的值，并且应用百分比公式。

```js
const percentile = (arr, val) =>
  (100 * arr.reduce((acc, v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0), 0)) / arr.length;
```

```js
percentile([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6); // 55
```
