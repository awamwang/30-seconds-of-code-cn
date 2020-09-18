---
title: getScrollPosition
tags: browser,intermediate
---

Returns the scroll position of the current page.

返回当前页面的滚动位置。

- Use `pageXOffset` and `pageYOffset` if they are defined, otherwise `scrollLeft` and `scrollTop`.
- You can omit `el` to use a default value of `window`.

如果`pageXOffset`和`pageYOffset`有定义则使用它们，否则用`scrollLeft`和`scrollTop`。你可以不传`el`参数来使用默认值`window`。

```js
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});
```

```js
getScrollPosition(); // {x: 0, y: 200}
```
