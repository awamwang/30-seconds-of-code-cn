---
title: elementIsVisibleInViewport
tags: browser,advanced
---

Returns `true` if the element specified is visible in the viewport, `false` otherwise.

如果给定的元素在可视区域中可见则返回`true`，否则返回`false`。

Use `Element.getBoundingClientRect()` and the `window.inner(Width|Height)` values
to determine if a given element is visible in the viewport.
Omit the second argument to determine if the element is entirely visible, or specify `true` to determine if
it is partially visible.

使用`Element.getBoundingClientRect()`和`window.inner(Width|Height)`值来确定给定的元素在可视区域是否可见。如果不传第二个参数来决定元素是否要求完全可见（全部都在可视区域），则用`true`作为默认值，只要求元素部分可见。

```js
const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
  const { top, left, bottom, right } = el.getBoundingClientRect();
  const { innerHeight, innerWidth } = window;
  return partiallyVisible
    ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
    : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
};
```

```js
// e.g. 100x100 viewport and a 10x10px element at position {top: -1, left: 0, bottom: 9, right: 10}
elementIsVisibleInViewport(el); // false - (not fully visible)
elementIsVisibleInViewport(el, true); // true - (partially visible)
```