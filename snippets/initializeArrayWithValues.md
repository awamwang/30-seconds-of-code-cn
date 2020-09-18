---
title: initializeArrayWithValues
tags: array,math,intermediate
---

Initializes and fills an array with the specified values.

用给定的值初始化并填充一个数组。

- Use `Array(n)` to create an array of the desired length, `fill(v)` to fill it with the desired values.
- You can omit `val` to use a default value of `0`.

使用`Array(n)`来创建一个期望长度的数组，用`fill(v)`来给它填充期望的值。`val`不传，则使用默认值`0`。

```js
const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val);
```

```js
initializeArrayWithValues(5, 2); // [2, 2, 2, 2, 2]
```
