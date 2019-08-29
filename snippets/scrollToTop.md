---
title: scrollToTop
tags: browser,intermediate
---

Smooth-scrolls to the top of the page.

平滑的滑动到页面顶部。

Get distance from top using `document.documentElement.scrollTop` or `document.body.scrollTop`.
Scroll by a fraction of the distance from the top. Use `window.requestAnimationFrame()` to animate the scrolling.

使用`document.documentElement.scrollTop`或者`document.body.scrollTop`获取到顶部的距离。从顶部滚动一部分距离。使用`window.requestAnimationFrame()`来执行滚动操作。

```js
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};
```

```js
scrollToTop();
```