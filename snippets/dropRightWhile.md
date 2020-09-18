---
title: dropRightWhile
tags: array,function,intermediate
---

Removes elements from the end of an array until the passed function returns `true`. Returns the remaining elements in the array.

从数组尾部开始删掉给出的函数作用后返回`false`的元素，直到遇到第一个返回`true`的。返回数组的剩余元素。

- Loop through the array, using `Array.prototype.slice()` to drop the last element of the array until the returned value from the function is `true`.
- Returns the remaining elements.

遍历给出的数组，使用`Array.prototype.slice()`来去除数组尾部的元素，直到遇到给出的函数作用后返回`true`的元素。返回剩余元素。

```js
const dropRightWhile = (arr, func) => {
  let rightIndex = arr.length;
  while (rightIndex-- && !func(arr[rightIndex]));
  return arr.slice(0, rightIndex + 1); // 返回一个新的数组
};
```

```js
dropRightWhile([1, 2, 3, 4], n => n < 3); // [1, 2]
```
