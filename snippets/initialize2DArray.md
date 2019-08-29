---
title: initialize2DArray
tags: array,intermediate
---

Initializes a 2D array of given width and height and value.

使用给定的宽、高和值初始化一个二维数组。

Use `Array.prototype.map()` to generate h rows where each is a new array of size w initialize with value. If the value is not provided, default to `null`.

使用`Array.prototype.map()`创建`h`行，每行都是一个使用`val`初始化的长度为`w`的数组。如果`val`不传，默认为`null`。

```js
const initialize2DArray = (w, h, val = null) =>
  Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));
```

```js
initialize2DArray(2, 2, 0); // [[0,0], [0,0]]
```