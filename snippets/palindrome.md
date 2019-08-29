---
title: palindrome
tags: string,intermediate
---

Returns `true` if the given string is a palindrome, `false` otherwise.

如果给定的字符串是回文的，则返回`true`，否则返回`false`。

Convert the string to `String.prototype.toLowerCase()` and use `String.prototype.replace()` to remove non-alphanumeric characters from it.
Then, use the spread operator (`...`) to split the string into individual characters, `Array.prototype.reverse()`, `String.prototype.join('')` and compare it to the original, unreversed string, after converting it to `String.prototype.toLowerCase()`.

把字符串转换到`String.prototype.toLowerCase()`，并使用`String.prototype.replace()`从其中删除非数字和字母的字符。然后，使用展开操作符(`...`)来把字符串分解成独立的字符，使用`Array.prototype.reverse()`, `String.prototype.join('')`并把它在`String.prototype.toLowerCase()`后和原始的未翻转的字符串比较。

```js
const palindrome = str => {
  const s = str.toLowerCase().replace(/[\W_]/g, '');
  return s === [...s].reverse().join('');
};
```

```js
palindrome('taco cat'); // true
```