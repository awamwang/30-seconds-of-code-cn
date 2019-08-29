---
title: sortedIndex
tags: array,math,intermediate
---

Returns the lowest index at which value should be inserted into array in order to maintain its sort order.

返回为了维持原始有序数组的顺序，把给定的新元素值添加到数组中的最小位置。

Check if the array is sorted in descending order (loosely).
Use `Array.prototype.findIndex()` to find the appropriate index where the element should be inserted.

检查数组是否被倒序排列（非严格的）。使用`Array.prototype.findIndex()`来找到插入新元素的合适位置。

```js
const sortedIndex = (arr, n) => {
  const isDescending = arr[0] > arr[arr.length - 1];
  const index = arr.findIndex(el => (isDescending ? n >= el : n <= el));
  return index === -1 ? arr.length : index;
};
```

```js
sortedIndex([5, 3, 2, 1], 4); // 1
sortedIndex([30, 50], 40); // 1
```