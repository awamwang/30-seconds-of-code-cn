---
title: mask
tags: string,utility,intermediate
---

Replaces all but the last `num` of characters with the specified mask character.

用指定的掩盖字符替换除了最后`num`个字符（只保留最后`num`个，其他字符替换为掩盖字符）。

Use `String.prototype.slice()` to grab the portion of the characters that will remain unmasked and use `String.padStart()` to fill the beginning of the string with the mask character up to the original length.
Omit the second argument, `num`, to keep a default of `4` characters unmasked. If `num` is negative, the unmasked characters will be at the start of the string.
Omit the third argument, `mask`, to use a default character of `'*'` for the mask.

使用`String.prototype.slice()`获取将要保留为不掩盖的字符串部分，并使用`String.padStart()`来用掩盖字符填充字符串的头部，直到填充为原始长度。
如果不传第二个参数`num`，则默认保留`4`个字符不掩盖。如果`num`是负数，不掩盖的字符将会在字符串的头部。如果不传第三个参数`mask`，默认使用`'*'`作为掩盖字符。

```js
const mask = (cc, num = 4, mask = '*') => `${cc}`.slice(-num).padStart(`${cc}`.length, mask);
```

```js
mask(1234567890); // '******7890'
mask(1234567890, 3); // '*******890'
mask(1234567890, -4, '$'); // '$$$$567890'
```
