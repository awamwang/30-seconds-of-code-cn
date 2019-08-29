---
title: takeRightWhile
tags: array,function,intermediate
---

Removes elements from the end of an array until the passed function returns `true`. Returns the removed elements.

删除直到传入的函数返回`true`之前的所有数组尾部元素（代码应该实现的是：从尾部开始计算，按照原顺序返回应用函数后返回假值的元素）。返回删除掉的元素列表。

Loop through the array, using a `Array.prototype.reduceRight()` and accumulating elements while the function returns falsy value.

遍历数组，使用`Array.prototype.reduceRight()`来收集返回假值的元素列表。

```js
const takeRightWhile = (arr, func) =>
  arr.reduceRight((acc, el) => (func(el) ? acc : [el, ...acc]), []);
```

```js
takeRightWhile([1, 2, 3, 4], n => n < 3); // [3, 4]
```