---
title: pad
tags: string,beginner
---

Pads a string on both sides with the specified character, if it's shorter than the specified length.

如果字符串的长度比指定的长度短，则用指定的字符填充它的两端。

Use `String.prototype.padStart()` and `String.prototype.padEnd()` to pad both sides of the given string.
Omit the third argument, `char`, to use the whitespace character as the default padding character.

使用`String.prototype.padStart()`和`String.prototype.padEnd()`来用指定字符串填充两端。如果不传第三个参数`char`，使用空白字符作为默认的填充字符。

```js
const pad = (str, length, char = ' ') =>
  str.padStart((str.length + length) / 2, char).padEnd(length, char);
```

```js
pad('cat', 8); // '  cat   '
pad(String(42), 6, '0'); // '004200'
pad('foobar', 3); // 'foobar'
```
