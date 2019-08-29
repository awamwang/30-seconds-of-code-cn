---
title: distance
tags: math,beginner
---

Returns the distance between two points.

返回两个点之间的距离。

Use `Math.hypot()` to calculate the Euclidean distance between two points.

使用`Math.hypot()`来计算两个点之间的欧式距离。

```js
const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);
```

```js
distance(1, 1, 2, 3); // 2.23606797749979
```