---
title: standardDeviation
tags: math,array,intermediate
---

Returns the standard deviation of an array of numbers.

返回一个数字数组的标准差。

Use `Array.prototype.reduce()` to calculate the mean, variance and the sum of the variance of the values, the variance of the values, then
determine the standard deviation.
You can omit the second argument to get the sample standard deviation or set it to `true` to get the population standard deviation.

使用`Array.prototype.reduce()`来计算平均值，方差和所有值的方差和还有整体方差，然后计算出标准差。你可以不传第二个参数来获得样本标准差，如果把它设置为`true`则获取总体标准差。

```js
const standardDeviation = (arr, usePopulation = false) => {
  const mean = arr.reduce((acc, val) => acc + val, 0) / arr.length;
  return Math.sqrt(
    arr.reduce((acc, val) => acc.concat((val - mean) ** 2), []).reduce((acc, val) => acc + val, 0) /
      (arr.length - (usePopulation ? 0 : 1))
  );
};
```

```js
standardDeviation([10, 2, 38, 23, 38, 23, 21]); // 13.284434142114991 (sample)
standardDeviation([10, 2, 38, 23, 38, 23, 21], true); // 12.29899614287479 (population)
```