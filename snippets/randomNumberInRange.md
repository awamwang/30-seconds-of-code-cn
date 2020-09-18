---
title: randomNumberInRange
tags: math,random,beginner
---

Returns a random number in the specified range.

返回指定范围内的一个随机数。

- Use `Math.random()` to generate a random value, map it to the desired range using multiplication.

使用`Math.random()`来生成一个随机数，然后使用乘法把它映射到指定范围。

```js
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;
```

```js
randomNumberInRange(2, 10); // 6.0211363285087005
```
