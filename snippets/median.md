---
title: median
tags: math,array,intermediate
---

Returns the median of an array of numbers.

返回一个数字数组的中位数。

Find the middle of the array, use `Array.prototype.sort()` to sort the values.
Return the number at the midpoint if `length` is odd, otherwise the average of the two middle numbers.

使用`Array.prototype.sort()`排序数值后，找到数组的中间值。如果数组`length`是奇数，则返回最中间的数字，否则返回中间两个数字的平均值。

```js
const median = arr => {
  const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
  return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};
```

```js
median([5, 6, 50, 1, -5]); // 5
```