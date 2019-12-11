---
title: permutations
tags: array,recursion,advanced
---

Generates all permutations of an array's elements (contains duplicates).

生成数组中元素的所有排列。（包含重复组合）

⚠️ **WARNING**: This function's execution time increases exponentially with each array element. Anything more than 8 to 10 entries will cause your browser to hang as it tries to solve all the different combinations.

⚠️ **WARNING**: 本函数的执行时间随着数组元素个数指数级增长。任何超过8~10个元素的数组会导致浏览器尝因试不同的组合而导致挂起（大量同步计算导致无响应）。

Use recursion.
For each element in the given array, create all the partial permutations for the rest of its elements.
Use `Array.prototype.map()` to combine the element with each partial permutation, then `Array.prototype.reduce()` to combine all permutations in one array.
Base cases are for array `length` equal to `2` or `1`.

使用递归。对给定数组中每个元素，创建除它以外所有元素的排列。使用`Array.prototype.map()`来把这个元素和每个剩余部分的排列结合，然后使用`Array.prototype.reduce()`把所有排列结合成一个数组。

```js
const permutations = arr => {
  if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
  return arr.reduce(
    (acc, item, i) =>
      acc.concat(
        permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [item, ...val])
      ),
    []
  );
};
```

```js
permutations([1, 33, 5]); // [ [ 1, 33, 5 ], [ 1, 5, 33 ], [ 33, 1, 5 ], [ 33, 5, 1 ], [ 5, 1, 33 ], [ 5, 33, 1 ] ]
```
