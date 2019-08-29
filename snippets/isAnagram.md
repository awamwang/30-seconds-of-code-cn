---
title: isAnagram
tags: string,regexp,intermediate
---

Checks if a string is an anagram of another string (case-insensitive, ignores spaces, punctuation and special characters).

检测一个字符串是否是另一个字符串的重新排列（大小写敏感，忽略空格、点号和特定的字符）。重新排列就是说两个字符串拥有相同的字母元素和个数。

Use `String.toLowerCase()`, `String.prototype.replace()` with an appropriate regular expression to remove unnecessary characters, `String.prototype.split('')`, `Array.prototype.sort()` and `Array.prototype.join('')` on both strings to normalize them, then check if their normalized forms are equal.

使用`String.toLowerCase()`, `String.prototype.replace()`和合适的正则表达式来删除非必要的字符串。对两个字符串都使用`String.prototype.split('')`, `Array.prototype.sort()`和`Array.prototype.join('')`来标准化它们，然后检测它们的标准化格式是否相等。

```js
const isAnagram = (str1, str2) => {
  const normalize = str =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('');
  return normalize(str1) === normalize(str2);
};
```

```js
isAnagram('iceman', 'cinema'); // true
```