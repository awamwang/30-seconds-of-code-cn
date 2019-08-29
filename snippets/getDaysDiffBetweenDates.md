---
title: getDaysDiffBetweenDates
tags: date,intermediate
---

Returns the difference (in days) between two dates.

返回两个时间对象的日期上的差值。

Calculate the difference (in days) between two `Date` objects.

计算两个时间对象的日期上的差值。

```js
const getDaysDiffBetweenDates = (dateInitial, dateFinal) =>
  (dateFinal - dateInitial) / (1000 * 3600 * 24);
```

```js
getDaysDiffBetweenDates(new Date('2017-12-13'), new Date('2017-12-22')); // 9
```