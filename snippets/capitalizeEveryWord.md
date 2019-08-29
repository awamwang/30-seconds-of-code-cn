---
title: capitalizeEveryWord
tags: string,regexp,intermediate
---

Capitalizes the first letter of every word in a string.

大写化字符串中每一个词的第一个字母。

Use `String.prototype.replace()` to match the first character of each word and `String.prototype.toUpperCase()` to capitalize it.

使用`String.prototype.replace()`来匹配每个词的第一个字符，并使用`String.prototype.toUpperCase()`来把它大写化。

```js
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
```

```js
capitalizeEveryWord('hello world!'); // 'Hello World!'
```