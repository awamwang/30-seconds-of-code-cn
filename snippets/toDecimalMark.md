---
title: toDecimalMark
tags: math,beginner
---

Converts a number to a decimal mark formatted string.

- Use `Number.prototype.toLocaleString()` to convert the numbre to decimal mark format.

使用`toLocaleString()`来把一个浮点数转换为[Decimal mark](https://en.wikipedia.org/wiki/Decimal_mark)格式。它从数字创建一个用逗号分隔的字符串。

 ```js
const toDecimalMark = num => num.toLocaleString('en-US');
```

```js
toDecimalMark(12305030388.9087); // "12,305,030,388.909"
```
