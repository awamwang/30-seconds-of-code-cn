---
title: capitalize
tags: string,array,intermediate
---

Capitalizes the first letter of a string.

大写字符串的第一个字母。

Use array destructuring and `String.prototype.toUpperCase()` to capitalize first letter, `...rest` to get array of characters after first letter and then `Array.prototype.join('')` to make it a string again.
Omit the `lowerRest` parameter to keep the rest of the string intact, or set it to `true` to convert to lowercase.

使用数组解构和`String.prototype.toUpperCase()`来大写化第一个字母，使用`...rest`来获取第一个字母后的字符数组，然后用`Array.prototype.join('')`把它们重新连结为字符串。如果不传`lowerRest`参数，则原封不动的保留字符串剩余的字符，如果设置`lowerRest`为`true`则把剩余的字符转换为小写。

```js
const capitalize = (
  [first, ...rest],
  lowerRest = false // [first, ...rest]解构的巧妙应用，不光是对象和数组才能解构
) => first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));
```

```js
capitalize('fooBar'); // 'FooBar'
capitalize('fooBar', true); // 'Foobar'
```