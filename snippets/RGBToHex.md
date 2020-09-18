---
title: RGBToHex
tags: string,math,intermediate
---

Converts the values of RGB components to a hexadecimal color code.

把一个RGB组合值转换为颜色码。

- Convert given RGB parameters to hexadecimal string using bitwise left-shift operator (`<<`) and `toString(16)`, then `String.padStart(6,'0')` to get a 6-digit hexadecimal value.

使用向左位移操作符(`<<`)和`toString(16)`来把RGB参数转换为十六进制字符串，然后使用`String.padStart(6,'0')`来获取一个6位的十六进制值。

```js
const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');
```

```js
RGBToHex(255, 165, 1); // 'ffa501'
```
