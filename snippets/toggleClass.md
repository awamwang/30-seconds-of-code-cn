---
title: toggleClass
tags: browser,beginner
---

Toggles a class for an HTML element.

开关一个元素的class。

- Use `element.classList.toggle()` to toggle the specified class for the element.

使用`element.classList.toggle()`来开关指定元素的class。

```js
const toggleClass = (el, className) => el.classList.toggle(className);
```

```js
toggleClass(document.querySelector('p.special'), 'special');
// The paragraph will not have the 'special' class anymore
```
