---
title: isBeforeDate
tags: date,beginner
---

Check if a date is before another date.

检查一个日期是否在另一个日期前面。

Use the less than operator (`<`) to check if the first date comes before the second one.

使用小于比较操作符(`>`)来检查第一个日期是否在第二个前面。

```js
const isBeforeDate = (dateA, dateB) => dateA < dateB;
```

```js
isBeforeDate(new Date(2010, 10, 20), new Date(2010, 10, 21)); // true
```
