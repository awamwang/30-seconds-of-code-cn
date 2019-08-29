---
title: compactWhitespace
tags: string,regexp,beginner
---

Returns a string with whitespaces compacted.

返回一个压缩了空白字符的字符串。

Use `String.prototype.replace()` with a regular expression to replace all occurrences of 2 or more whitespace characters with a single space.

使用`String.prototype.replace()`和一个正则表达式来把出现了2个或更多次（连续）的空白字符替换为单个空格。

```js
const compactWhitespace = str => str.replace(/\s{2,}/g, ' ');
```

```js
compactWhitespace('Lorem    Ipsum'); // 'Lorem Ipsum'
compactWhitespace('Lorem \n Ipsum'); // 'Lorem Ipsum'
```