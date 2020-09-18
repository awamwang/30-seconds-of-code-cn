---
title: hammingDistance
tags: math,regexp,intermediate
---

Calculates the Hamming distance between two values.

计算两个值之间的汉明距离。

- Use the XOR operator (`^`) to find the bit difference between the two numbers, convert to a binary string using `toString(2)`.
- Count and return the number of `1`s in the string, using `match(/1/g)`.

使用异或操作符(`^`)来找到两个数之间的bit位差异，用`toString(2)`把它转换二进制字符串。使用`match(/1/g)`计算并返回字符串中`1`的数目。

```js
const hammingDistance = (num1, num2) => ((num1 ^ num2).toString(2).match(/1/g) || '').length;
```

```js
hammingDistance(2, 3); // 1
```
