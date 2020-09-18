---
title: setStyle
tags: browser,beginner
---

Sets the value of a CSS rule for the specified HTML element.

为指定的元素设置CSS规则值。

- Use `element.style` to set the value of the CSS rule for the specified element to `val`.

使用`element.style`来把指定元素的CSS值设置为`val`。

```js
const setStyle = (el, ruleName, val) => (el.style[ruleName] = val);
```

```js
setStyle(document.querySelector('p'), 'font-size', '20px');
// The first <p> element on the page will have a font-size of 20px
```
