---
title: escapeRegExp
tags: string,regexp,intermediate
---

Escapes a string to use in a regular expression.

转义一个在正则表达式中使用的字符串。

Use `String.prototype.replace()` to escape special characters.

使用`String.prototype.replace()`来转义特殊字符。

```js
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
```

```js
escapeRegExp('(test)'); // \\(test\\)
```