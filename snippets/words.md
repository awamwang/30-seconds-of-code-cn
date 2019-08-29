---
title: words
tags: string,regexp,intermediate
---

Converts a given string into an array of words.

把给出的字符串转换为一个单词列表。

Use `String.prototype.split()` with a supplied pattern (defaults to non-alpha as a regexp) to convert to an array of strings. Use `Array.prototype.filter()` to remove any empty strings.
Omit the second argument to use the default regexp.

使用`String.prototype.split()`和给出的标识（默认是一个非字母正则表达式）来转换一个字符串数组。使用`Array.prototype.filter()`删除掉所有的空字符串。如果不传第二个参数，则使用默认的正则表达式。

```js
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);
```

```js
words('I love javaScript!!'); // ["I", "love", "javaScript"]
words('python, javaScript & coffee'); // ["python", "javaScript", "coffee"]
```