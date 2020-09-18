---
title: insertAfter
tags: browser,beginner
---

Inserts an HTML string after the end of the specified element.

在指定元素的后面添加一个HTML字符串。

- Use `el.insertAdjacentHTML()` with a position of `'afterend'` to parse `htmlString` and insert it after the end of `el`.

使用`el.insertAdjacentHTML()`，以`'afterend'`作为position来解析`htmlString`，并把它插入到`el`后面。

```js
const insertAfter = (el, htmlString) => el.insertAdjacentHTML('afterend', htmlString);
```

```js
insertAfter(document.getElementById('myId'), '<p>after</p>');
// <div id="myId">...</div> <p>after</p>
```
