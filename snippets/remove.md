---
title: remove
tags: array,intermediate
---

Mutates an array by removing elements for which the given function returns `false`.

把数组中给定函数作用后返回`false`的元素删除。

Use `Array.prototype.filter()` to find array elements that return truthy values and `Array.prototype.reduce()` to remove elements using `Array.prototype.splice()`.
The `func` is invoked with three arguments (`value, index, array`).

使用`Array.prototype.filter()`来找到数组中的返回真值的元素，并使用`Array.prototype.reduce()`和`Array.prototype.splice()`去除掉它。`func`回调支持三个参数(`value, index, array`)。

```js
const remove = (arr, func) =>
  Array.isArray(arr)
    ? arr.filter(func).reduce((acc, val) => {
        arr.splice(arr.indexOf(val), 1);
        return acc.concat(val);
      }, [])
    : [];
```

```js
remove([1, 2, 3, 4], n => n % 2 === 0); // [2, 4]
```
