---
title: clampNumber
tags: math,beginner
---

Clamps `num` within the inclusive range specified by the boundary values `a` and `b`.

把`num`限制在通过边界值`a`和`b`指定的包含区间内。

If `num` falls within the range, return `num`.
Otherwise, return the nearest number in the range.

如果`num`落在区间内，则返回`num`。否则，返回区间内最接近它的数。

```js
const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b)); // 画个数轴可以想明白这个代码的逻辑，通过min/max的组合使用把代码精简到一行，且没有分支
```

```js
clampNumber(2, 3, 5); // 3
clampNumber(1, -1, -5); // -1
```