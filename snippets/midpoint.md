---
title: midpoint
tags: math,array,beginner
---

Calculates the midpoint between two pairs of (x,y) points.

计算一对`(x,y)`形式点的中间点。

- Destructure the array to get `x1`, `y1`, `x2` and `y2`, calculate the midpoint for each dimension by dividing the sum of the two endpoints by `2`.

解构数组得到`x1`, `y1`, `x2`和`y2`，通过把两个端点的和除以`2`来计算每个维度的中间点。

```js
const midpoint = ([x1, y1], [x2, y2]) => [(x1 + x2) / 2, (y1 + y2) / 2];
```

```js
midpoint([2, 2], [4, 4]); // [3, 3]
midpoint([4, 4], [6, 6]); // [5, 5]
midpoint([1, 3], [2, 4]); // [1.5, 3.5]
```
