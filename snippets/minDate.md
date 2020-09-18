---
title: minDate
tags: date,math,beginner
---

Returns the minimum of the given dates.

- Use the ES6 spread syntax to find the minimum date value, `new Date()` to convert it to a `Date` object.

使用ES6的展开操作符来找到最小的日期值，用`new Date()`把它们转为一个`Date`对象。

```js
const minDate = dates => new Date(Math.min(...dates));
```

```js
const array = [
  new Date(2017, 4, 13),
  new Date(2018, 2, 12),
  new Date(2016, 0, 10),
  new Date(2016, 0, 9)
];
minDate(array); // 2016-01-08T22:00:00.000Z
```
