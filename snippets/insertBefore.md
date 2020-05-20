---
title: insertBefore
tags: browser,beginner
---

Inserts an HTML string before the start of the specified element.

在指定元素的前面添加一个HTML字符串。

Use `el.insertAdjacentHTML()` with a position of `'beforebegin'` to parse `htmlString` and insert it before the start of `el`.

使用`el.insertAdjacentHTML()`，以`'beforebegin'`作为position来解析`htmlString`，并把它插入到`el`后面。
```js
const insertBefore = (el, htmlString) => el.insertAdjacentHTML('beforebegin', htmlString);
```

```js
insertBefore(document.getElementById('myId'), '<p>before</p>');
// <p>before</p> <div id="myId">...</div>
```
