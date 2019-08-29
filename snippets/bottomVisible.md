---
title: bottomVisible
tags: browser,intermediate
---

Returns `true` if the bottom of the page is visible, `false` otherwise.

如果当前页面的底部可见（已经显示在视窗中）则返回`true`，否则返回`false`

Use `scrollY`, `scrollHeight` and `clientHeight` to determine if the bottom of the page is visible.

使用`scrollY`, `scrollHeight` 和 `clientHeight`来判断当前页面的底部是否可见。

```js
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight || document.documentElement.clientHeight); // 是否已经向下滚动了足够的距离window.scrollY，使的页面最下面（在document.documentElement.scrollHeight位置）的已经被显示到视窗高度内了（document.documentElement.clientHeight）；另一种情况是页面不不需要滚动，已经完全显示了
```

```js
bottomVisible(); // true
```