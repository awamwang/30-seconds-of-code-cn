---
title: sample
tags: array,random,beginner
---

Returns a random element from an array.

从数组中返回一个随机元素。

- Use `Math.random()` to generate a random number, multiply it by `length` and round it off to the nearest whole number using `Math.floor()`.
- This method also works with strings.

使用`Math.random()`生成一个随机数，把它乘以数组长度 `length`，并使用`Math.floor()`来取得不大于相乘结果的最接近整数。这个方法也适用于字符串。

```js
const sample = arr => arr[Math.floor(Math.random() * arr.length)];
```

```js
sample([3, 7, 9, 11]); // 9
```
