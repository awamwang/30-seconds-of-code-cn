---
title: average
tags: math,array,beginner
---

Returns the average of two or more numbers.

返回两个或多个数的平均值。

- Use `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`, divide by the `length` of the array.

使用`Array.prototype.reduce()`来把每个值添加到累加器中，初始累加值为`0`，再除以数组的长度`length`。

```js
const average = (...nums) => nums.reduce((acc, val) => acc + val, 0) / nums.length;
```

```js
average(...[1, 2, 3]); // 2
average(1, 2, 3); // 2
```
