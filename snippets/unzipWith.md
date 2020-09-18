---
title: unzipWith
tags: array,function,advanced
---

Creates an array of elements, ungrouping the elements in an array produced by [zip](#zip) and applying the provided function.

返回一个数组，把[zip](#zip)产生的数组元素的分组拆解掉，并对每个元素应用给定的函数。

- Use `Math.max.apply()` to get the longest subarray in the array, `Array.prototype.map()` to make each element an array.
- Use `Array.prototype.reduce()` and `Array.prototype.forEach()` to map grouped values to individual arrays.
- Use `Array.prototype.map()` and the spread operator (`...`) to apply `fn` to each individual group of elements.

使用`Math.max.apply()`获取数组中最长的子数组，使用`Array.prototype.map()`来把每个元素转为一个数组。使用`Array.prototype.reduce()` 和 `Array.prototype.forEach()`来把映射出来的分组的值列表分解到单独的数组列表中。使用`Array.prototype.map()`和展开操作符(`...`)来对分组中每个元素列表应用函数`fn`.

```js
const unzipWith = (arr, fn) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
      Array.from({
        length: Math.max(...arr.map(x => x.length))
      }).map(x => [])
    )
    .map(val => fn(...val));
```

```js
unzipWith([[1, 10, 100], [2, 20, 200]], (...args) => args.reduce((acc, v) => acc + v, 0)); // [3, 30, 300]
```
