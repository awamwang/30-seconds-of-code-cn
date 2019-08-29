---
title: uniqueElements
tags: array,beginner
---

Returns all unique values of an array.

返回数组中所有唯一的元素。

Use ES6 `Set` and the `...rest` operator to discard all duplicated values.

使用ES6的`Set`和`...rest`操作符来去除所有重复元素。

```js
const uniqueElements = arr => [...new Set(arr)];
```

```js
uniqueElements([1, 2, 2, 3, 4, 4, 5]); // [1, 2, 3, 4, 5]
```