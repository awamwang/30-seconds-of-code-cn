---
title: randomHexColorCode
tags: math,random,beginner
---

Generates a random hexadecimal color code.

生成一个随机的十六进制颜色码。

Use `Math.random` to generate a random 24-bit(6x4bits) hexadecimal number.
Use bit shifting and then convert it to an hexadecimal String using `toString(16)`.

使用`Math.random`来生成一个随机的24-bit(6x4bits)十六进制数字。使用位移，然后使用`toString(16)`把它转换为一个十六进制的String。

```js
const randomHexColorCode = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};
```

```js
randomHexColorCode(); // "#e34155"
```
