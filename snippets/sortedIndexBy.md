---
title: sortedIndexBy
tags: array,math,function,intermediate
---

Returns the lowest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function.

基于给定的遍历函数，返回为了维持原始有序数组的顺序，把给定的新元素值添加到数组中的最小位置。

Check if the array is sorted in descending order (loosely).
Use `Array.prototype.findIndex()` to find the appropriate index where the element should be inserted, based on the iterator function `fn`.

检查数组是否被倒序排列（非严格的）。使用`Array.prototype.findIndex()`来基于遍历函数`fn`的结找到插入新元素的合适位置。

```js
const sortedIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr.findIndex(el => (isDescending ? val >= fn(el) : val <= fn(el)));
  return index === -1 ? arr.length : index;
};
```

```js
sortedIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x); // 0
```