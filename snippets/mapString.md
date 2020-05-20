---
title: mapString
tags: string,array,function,beginner
---

Creates a new string with the results of calling a provided function on every character in the calling string.

创建一个由给出的字符串中每个字符上都应用给定的函数后产生的结果组成的字符串。

Use `String.prototype.split('')` and `Array.prototype.map()` to call the provided function, `fn`, for each character in `str`.
Use `Array.prototype.join('')` to recombine the array of characters into a string.
The callback function, `fn`, takes three arguments (the current character, the index of the current character and the string `mapString` was called upon).

使用`String.prototype.split('')`和`Array.prototype.map()`来对`str`中的每个字符调用给定的函数`fn`。使用`Array.prototype.join('')`来把产生的字符数组重新组合为字符串。回调函数`fn`接受三个参数（当前字符，当前字符的序号，`mapString`所作用的字符串）。

```js
const mapString = (str, fn) =>
  str
    .split('')
    .map((c, i) => fn(c, i, str))
    .join('');
```

```js
mapString('lorem ipsum', c => c.toUpperCase()); // 'LOREM IPSUM'
```
