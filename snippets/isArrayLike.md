---
title: isArrayLike
tags: type,array,intermediate
---

Checks if the provided argument is array-like (i.e. is iterable).

检查给定的参数是否是类数组类型（例如iterable）。

Check if the provided argument is not `null` and that its `Symbol.iterator` property is a function.

检查给定的参数是否不是`null`，并且它的`Symbol.iterator`属性是一个函数。

```js
const isArrayLike = obj => obj != null && typeof obj[Symbol.iterator] === 'function';
```

```js
isArrayLike(document.querySelectorAll('.className')); // true
isArrayLike('abc'); // true
isArrayLike(null); // false
```