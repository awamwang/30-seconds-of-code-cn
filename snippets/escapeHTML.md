---
title: escapeHTML
tags: string,browser,regexp,intermediate
---

Escapes a string for use in HTML.

转译一个HTML中使用的字符串（转换HTML实例）。

- Use `String.prototype.replace()` with a regexp that matches the characters that need to be escaped, using a callback function to replace each character instance with its associated escaped character using a dictionary (object).

使用`String.prototype.replace()`和一个匹配需要转义的字符的正则表达式，还有一个回调函数来用相应的转义后的字符串（通过一个字典对象匹配）替换每个字符实例。

```js
const escapeHTML = str =>
  str.replace(
    /[&<>'"]/g,
    tag =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
  );
```

```js
escapeHTML('<a href="#">Me & you</a>'); // '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'
```
