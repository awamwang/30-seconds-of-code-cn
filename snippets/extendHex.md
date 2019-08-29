---
title: extendHex
tags: utility,string,intermediate
---

Extends a 3-digit color code to a 6-digit color code.

把3位的颜色码扩充到6位颜色码。

Use `Array.prototype.map()`, `String.prototype.split()` and `Array.prototype.join()` to join the mapped array for converting a 3-digit RGB notated hexadecimal color-code to the 6-digit form.
`Array.prototype.slice()` is used to remove `#` from string start since it's added once.

使用`Array.prototype.map()`, `String.prototype.split()`和`Array.prototype.join()`来把映射的数组连结起来，用来把3位的RGB形式的十六进制颜色码转为6位格式。

```js
const extendHex = shortHex =>
  '#' +
  shortHex
    .slice(shortHex.startsWith('#') ? 1 : 0)
    .split('')
    .map(x => x + x)
    .join('');
```

```js
extendHex('#03f'); // '#0033ff'
extendHex('05a'); // '#0055aa'
```