---
title: takeWhile
tags: array,function,intermediate
---

Removes elements in an array until the passed function returns `true`. Returns the removed elements.

删除直到传入的函数返回`true`之前的所有数组首部元素。返回删除掉的元素列表。

Loop through the array, using a `for...of` loop over `Array.prototype.entries()` until the returned value from the function is `true`.
Return the removed elements, using `Array.prototype.slice()`.

遍历数组，使用`for...of`遍历`Array.prototype.entries()`的结果，直到函数返回值为`true`。使用`Array.prototype.slice()`返回删除掉的元素。

```js
const takeWhile = (arr, func) => {
  for (const [i, val] of arr.entries()) if (func(val)) return arr.slice(0, i);
  return arr;
};
```

```js
takeWhile([1, 2, 3, 4], n => n >= 3); // [1, 2]
```