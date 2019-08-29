---
title: last
tags: array,beginner
---

Returns the last element in an array.

返回数组中最后一个元素。

Use `arr.length - 1` to compute the index of the last element of the given array and returning it.

使用`arr.length - 1`来计算给定数组的最后一个元素的序号并返回它的值。

```js
const last = arr => arr[arr.length - 1];
```

```js
last([1, 2, 3]); // 3
```