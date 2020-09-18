---
title: reverseString
tags: string,array,beginner
---

Reverses a string.

翻转一个字符串。

- Use the spread operator (`...`) and `Array.prototype.reverse()` to reverse the order of the characters in the string.
- Combine characters to get a string using `String.prototype.join('')`.

使用展开操作符(`...`)和`Array.prototype.reverse()`来翻转字符串中字符的顺序。使用`String.prototype.join('')`来结合这些字符来获得一个字符串。

```js
const reverseString = str => [...str].reverse().join('');
```

```js
reverseString('foobar'); // 'raboof'
```
