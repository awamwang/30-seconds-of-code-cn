---
title: findLastIndex
tags: array,function,intermediate
---

Returns the index of the last element for which the provided function returns a truthy value.

返回被给定函数作用后返回真值的元素的序号。

- Use `Array.prototype.map()` to map each element to an array with its index and value.
- Use `Array.prototype.filter()` to remove elements for which `fn` returns falsy values, `Array.prototype.pop()` to get the last one.
- `-1` is the default value when not found.

使用`Array.prototype.map()`来遍历数组中每个元素的序号和值。使用`Array.prototype.filter()`来过滤掉`fn`作用后返回假值的元素，再使用`Array.prototype.pop()`来获取其中最后一个元素。

```js
const findLastIndex = (arr, fn) =>
  (arr
    .map((val, i) => [i, val])
    .filter(([i, val]) => fn(val, i, arr))
    .pop() || [-1])[0];
```

```js
findLastIndex([1, 2, 3, 4], n => n % 2 === 1); // 2 (index of the value 3)
findLastIndex([1, 2, 3, 4], n => n === 5); // -1 (default value when not found)
```
