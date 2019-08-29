---
title: offset
tags: array,beginner
---

Moves the specified amount of elements to the end of the array.

移除数组尾部指定个数的元素。

Use `Array.prototype.slice()` twice to get the elements after the specified index and the elements before that.
Use the spread operator(`...`) to combine the two into one array.
If `offset` is negative, the elements will be moved from end to start.

使用2次`Array.prototype.slice()`来获取指定序号后面的和前面的元素列表。使用展开操作符(`...`) 来把两个列表合一。如果`offset`是负数，移除的元素则从后向前数。

```js
const offset = (arr, offset) => [...arr.slice(offset), ...arr.slice(0, offset)];
```

```js
offset([1, 2, 3, 4, 5], 2); // [3, 4, 5, 1, 2]
offset([1, 2, 3, 4, 5], -2); // [4, 5, 1, 2, 3]
```