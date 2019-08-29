---
title: sumPower
tags: math,intermediate
---

Returns the sum of the powers of all the numbers from `start` to `end` (both inclusive).

返回从`start`到`end`（两边都闭区间）的所有数字的加权和。

Use `Array.prototype.fill()` to create an array of all the numbers in the target range, `Array.prototype.map()` and the exponent operator (`**`) to raise them to `power` and `Array.prototype.reduce()` to add them together.
Omit the second argument, `power`, to use a default power of `2`.
Omit the third argument, `start`, to use a default starting value of `1`.

使用`Array.prototype.fill()`来创建一个在目标范围内的所有数字的数组，使用`Array.prototype.map()`和求幂操作符(`**`) 来把它们加权到`power`并用`Array.prototype.reduce()`把结果加和起来。如果不传第二个参数`power`，默认值权重为`2`；如果不传第三个参数`start`，默认从`1`开始。

```js
const sumPower = (end, power = 2, start = 1) =>
  Array(end + 1 - start)
    .fill(0)
    .map((x, i) => (i + start) ** power)
    .reduce((a, b) => a + b, 0);
```

```js
sumPower(10); // 385
sumPower(10, 3); // 3025
sumPower(10, 3, 5); // 2925
```