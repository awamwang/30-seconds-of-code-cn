---
title: indentString
tags: string,beginner
---

Indents each line in the provided string.

缩进给定字符串的每一行。

Use `String.replace` and a regular expression to add the character specified by `indent` `count` times at the start of each line.
Omit the third parameter, `indent`, to use a default indentation character of `' '`.

使用`String.replace`和一个正则表达式在每一行的开始添加指定的`indent``count`次的字符串。如果不传第三个参数`indent`，使用默认的缩进字符`' '`。

```js
const indentString = (str, count, indent = ' ') => str.replace(/^/gm, indent.repeat(count));
```

```js
indentString('Lorem\nIpsum', 2); // '  Lorem\n  Ipsum'
indentString('Lorem\nIpsum', 2, '_'); // '__Lorem\n__Ipsum'
```
