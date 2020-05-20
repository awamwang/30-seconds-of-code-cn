---
title: uniqueElements
tags: array,beginner
---

Returns all unique values in an array.

返回数组中所有唯一的元素。

Create a `Set` from the given array to discard duplicated values, then use the spread operator (`...`) to convert it back to an array.

从给出的数组创建一个`Set`，用来去除重复值，然后使用展开操作符(`...`)来把它转换回数组形式。

```js
const uniqueElements = arr => [...new Set(arr)];
```

```js
uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```
