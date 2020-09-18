---
title: splitLines
tags: string,beginner
---

Splits a multiline string into an array of lines.

把多行字符拆分成行的数组。

- Use `String.prototype.split()` and a regular expression to match line breaks and create an array.

使用`String.prototype.split()`和一个匹配换行的正则表达式来并创建一个数组。

```js
const splitLines = str => str.split(/\r?\n/);
```

```js
splitLines('This\nis a\nmultiline\nstring.\n'); // ['This', 'is a', 'multiline', 'string.' , '']
```
