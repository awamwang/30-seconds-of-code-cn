---
title: last
tags: array,beginner
---

Returns the last element in an array.

返回数组中最后一个元素。

- Check if `arr` is truthy and has a `length` property, use `arr.length - 1` to compute the index of the last element of the given array and return it, otherwise return `undefined`.

检查`arr`是否为真，并且它有一个`length`属性。使用`arr.length - 1`来计算给定数组的最后一个元素的序号并返回它的值。

```js
const last = arr => (arr && arr.length ? arr[arr.length - 1] : undefined);
```

```js
last([1, 2, 3]); // 3
last([]); // undefined
last(null); // undefined
last(undefined); // undefined
```
