---
title: tomorrow
tags: date,intermediate
---

Results in a string representation of tomorrow's date.

返回一个代表明天日期的字符串。

- Use `new Date()` to get the current date, increment by one using `Date.getDate()` and set the value to the result using `Date.setDate()`.
- Use `Date.prototype.toISOString()` to return a string in `yyyy-mm-dd` format.

使用`new Date()`来获取今天的日期，使用`Date.getDate()`和`Date.setDate()`设置值来把日期增加一天。使用`Date.prototype.toISOString()`返回`yyyy-mm-dd`格式的字符串。

```js
const tomorrow = () => {
  let t = new Date();
  t.setDate(t.getDate() + 1);
  return t.toISOString().split('T')[0];
};
```

```js
tomorrow(); // 2018-10-19 (if current date is 2018-10-18)
```
