---
title: zipWith
tags: array,function,advanced
---

Creates an array of elements, grouped based on the position in the original arrays and using function as the last value to specify how grouped values should be combined.

创建一个元素列表的数组（二维数组），根据元素数组列表中的位置分组，并使用最后一个值来给定一个函数，用来指定分组的值该如何被结合到一起。

Check if the last argument provided is a function.
Use `Math.max()` to get the longest array in the arguments.
Creates an array with that length as return value and use `Array.from()` with a map-function to create an array of grouped elements.
If lengths of the argument-arrays vary, `undefined` is used where no value could be found.
The function is invoked with the elements of each group `(...group)`.

检查给出的最后一个参数是不是一个函数。使用`Math.max()`来获取参数中最长的数组。用这个长度创建一个数组作为返回值，用`Array.from()`和一个映射函数来创建分组后元素列表的数组。如果给出的参数数组列表的长度是不同的，没有值的位置使用`undefined`来补充。这个给出的函数对每一个分组`(...group)`中的元素列表都应用。

```js
const zipWith = (...array) => {
  const fn = typeof array[array.length - 1] === 'function' ? array.pop() : undefined;
  return Array.from({ length: Math.max(...array.map(a => a.length)) }, (_, i) =>
    fn ? fn(...array.map(a => a[i])) : array.map(a => a[i])
  );
};
```

```js
zipWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c); // [111,222]
zipWith(
  [1, 2, 3],
  [10, 20],
  [100, 200],
  (a, b, c) => (a != null ? a : 'a') + (b != null ? b : 'b') + (c != null ? c : 'c')
); // [111, 222, '3bc']
```