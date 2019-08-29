---
title: getMeridiemSuffixOfInteger
tags: date,beginner
---

Converts an integer to a suffixed string, adding `am` or `pm` based on its value.

把一个整数转为带后缀的字符串，根据它们的值来添加`am`或者`pm`（添加到后面）。

Use the modulo operator (`%`) and conditional checks to transform an integer to a stringified 12-hour format with meridiem suffix.

使用取模操作符(`%`)和条件运算符来把一个整数转换为12小时制的子午线后缀字符串形式。

```js
const getMeridiemSuffixOfInteger = num =>
  num === 0 || num === 24
    ? 12 + 'am'
    : num === 12
    ? 12 + 'pm'
    : num < 12
    ? (num % 12) + 'am'
    : (num % 12) + 'pm';
```

```js
getMeridiemSuffixOfInteger(0); // "12am"
getMeridiemSuffixOfInteger(11); // "11am"
getMeridiemSuffixOfInteger(13); // "1pm"
getMeridiemSuffixOfInteger(25); // "1pm"
```