---
title: isSameDate
tags: date,beginner
---

Check if a date is the same as another date.

检查一个日期是否与另一个日期相同。

Use `Date.prototype.toISOString()` and strict equality checking (`===`) to check if the first date is the same as the second one.

使用`Date.prototype.toISOString()`和严格的相等符号(`===`) 来检查第一个日期是否与第二个相同。

```js
const isSameDate = (dateA, dateB) => dateA.toISOString() === dateB.toISOString();
```

```js
isSameDate(new Date(2010, 10, 20), new Date(2010, 10, 20)); // true
```
