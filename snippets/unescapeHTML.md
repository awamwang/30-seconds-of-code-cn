### unescapeHTML

Unescapes escaped HTML characters.

解析转义后的HTML字符列表。

Use `String.prototype.replace()` with a regex that matches the characters that need to be unescaped, using a callback function to replace each escaped character instance with its associated unescaped character using a dictionary (object).

使用`String.prototype.replace()`和匹配需要解析的字符的正则表达式，使用一个回调函数来用相应的解析后的字符替换每个转义后的字符实例，解析规则通过一个字典指定（object）。

```js
const unescapeHTML = str =>
  str.replace(
    /&amp;|&lt;|&gt;|&#39;|&quot;/g,
    tag =>
      ({
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&#39;': "'",
        '&quot;': '"'
      }[tag] || tag)
  );
```

```js
unescapeHTML('&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'); // '<a href="#">Me & you</a>'
```
