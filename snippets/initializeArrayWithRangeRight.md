---
title: initializeArrayWithRangeRight
tags: array,math,intermediate
---

Initializes an array containing the numbers in the specified range (in reverse) where `start` and `end` are inclusive with their common difference `step`.

初始化一个包含`start`到`end`范围内以`step`为步进的数字列表的数组（倒序的）。

Use `Array.from(Math.ceil((end+1-start)/step))` to create an array of the desired length(the amounts of elements is equal to `(end-start)/step` or `(end+1-start)/step` for inclusive end), `Array.prototype.map()` to fill with the desired values in a range.
You can omit `start` to use a default value of `0`.
You can omit `step` to use a default value of `1`.

使用`Array.from(Math.ceil((end+1-start)/step))`来创建一个预期长度的数组（元素个数为`(end-start)/step`或者`(end+1-start)/step`）,使用`Array.prototype.map()`来用范围内期望的数填充它。`start`默认值为`0`，`step`默认值为`1`。

```js
const initializeArrayWithRangeRight = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map(
    (v, i, arr) => (arr.length - i - 1) * step + start
  );
```

```js
initializeArrayWithRangeRight(5); // [5,4,3,2,1,0]
initializeArrayWithRangeRight(7, 3); // [7,6,5,4,3]
initializeArrayWithRangeRight(9, 0, 2); // [8,6,4,2,0]
```