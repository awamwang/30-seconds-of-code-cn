---
title: inRange
tags: math,beginner
---

Checks if the given number falls within the given range.

检查给定的数是否落在给定的范围内。

Use arithmetic comparison to check if the given number is in the specified range.
If the second parameter, `end`, is not specified, the range is considered to be from `0` to `start`.

使用算术比较符来检查给定的数是否在指定的范围中。如果第二个参数`end`不指定，这个范围则视为从`0`到`start`。

```js
const inRange = (n, start, end = null) => {
  if (end && start > end) [end, start] = [start, end];
  return end == null ? n >= 0 && n < start : n >= start && n < end;
};
```

```js
inRange(3, 2, 5); // true
inRange(3, 4); // true
inRange(2, 3, 5); // false
inRange(3, 2); // false
```