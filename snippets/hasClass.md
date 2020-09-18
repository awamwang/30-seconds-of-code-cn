---
title: hasClass
tags: browser,css,beginner
---

Returns `true` if the element has the specified class, `false` otherwise.

如果元素有指定的class则返回`true`，否则返回`false`。

- Use `element.classList.contains()` to check if the element has the specified class.

使用`element.classList.contains()`检查给出的元素是否有指定的class。

```js
const hasClass = (el, className) => el.classList.contains(className);
```

```js
hasClass(document.querySelector('p.special'), 'special'); // true
```
