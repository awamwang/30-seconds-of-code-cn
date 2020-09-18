---
title: maxDate
tags: date,math,beginner
---

Returns the maximum of the given dates.

- Use the ES6 spread syntax with `Math.max` to find the maximum date value, `new Date()` to convert it to a `Date` object.

使用ES6的展开操作符配合`Math.max`来找到最大的日期值，用`new Date()`把它们转为一个`Date`对象。

```js
const maxDate = dates => new Date(Math.max(...dates));
```

```js
const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
maxDate(array); // 2018-03-11T22:00:00.000Z
```
