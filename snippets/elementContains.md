---
title: elementContains
tags: browser,intermediate
---

Returns `true` if the `parent` element contains the `child` element, `false` otherwise.

如果给出的`parent`包含了给出的`child`元素则返回`true`，否则返回`false`。

- Check that `parent` is not the same element as `child`, use `parent.contains(child)` to check if the `parent` element contains the `child` element.

先检查`parent`是不是和`child`一样，使用`parent.contains(child)`来检查`parent`元素是不是包含`child`元素。

```js
const elementContains = (parent, child) => parent !== child && parent.contains(child);
```

```js
elementContains(document.querySelector('head'), document.querySelector('title')); // true
elementContains(document.querySelector('body'), document.querySelector('body')); // false
```