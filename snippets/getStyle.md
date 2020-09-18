---
title: getStyle
tags: browser,css,beginner
---

Returns the value of a CSS rule for the specified element.

返回指定元素的CSS规则值（style）。

- Use `Window.getComputedStyle()` to get the value of the CSS rule for the specified element.

使用`Window.getComputedStyle()`来获取指定元素的CSS规则值（style）。

```js
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];
```

```js
getStyle(document.querySelector('p'), 'font-size'); // '16px'
```
