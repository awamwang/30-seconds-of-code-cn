---
title: isAfterDate
tags: date,beginner
---

Check if a date is after another date.

检查一个日期是否在另一个日期后面。

Use the greater than operator (`>`) to check if the first date comes after the second one.

使用大于比较操作符(`>`)来检查第一个日期是否在第二个后面。

```js
const isAfterDate = (dateA, dateB) => dateA > dateB;
```

```js
isAfterDate(new Date(2010, 10, 21), new Date(2010, 10, 20)); // true
```
