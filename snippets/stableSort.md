---
title: stableSort
tags: array,sort,advanced,intermediate
---

Performs stable sorting of an array, preserving the initial indexes of items when their values are the same.
Does not mutate the original array, but returns a new array instead.

按照数组的固定顺序排序，如果值相同，维持元素的原始序号不变。不直接改变原始数组，而是返回一个新数组。

Use `Array.prototype.map()` to pair each element of the input array with its corresponding index.
Use `Array.prototype.sort()` and a `compare` function to sort the list, preserving their initial order if the items compared are equal.
Use `Array.prototype.map()` to convert back to the initial array items.

使用`Array.prototype.map()`构造每个输入数组的元素的值和它的序号的数值对。使用`Array.prototype.sort()`和一个`compare`函数来对列表排序，如果比较结果相等则维持它们的初始序号。使用`Array.prototype.map()`把数值对还原成原始的数值元素。(个人认为：当前的JavaScript的sort方法本身就是稳定排序，应该只需要拷贝个新数组就可以了)。

```js
const stableSort = (arr, compare) =>
  arr
    .map((item, index) => ({ item, index }))
    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
    .map(({ item }) => item);
```

```js
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stable = stableSort(arr, () => 0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```