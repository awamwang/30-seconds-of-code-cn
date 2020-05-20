---
title: coalesceFactory
tags: type,intermediate
---

Returns a customized coalesce function that returns the first argument that returns `true` from the provided argument validation function.

返回一个自定义联合函数，它从返回参数中第一个被验证函数`valid`返回`true`的参数。

Use `Array.prototype.find()` to return the first argument that returns `true` from the provided argument validation function.

使用`Array.prototype.find()`来从给出的验证函数参数中返回第一个返回`true`的参数。

```js
const coalesceFactory = valid => (...args) => args.find(valid); // 建立了一个找到第一符合条件元素的通用方法
```

```js
const customCoalesce = coalesceFactory(_ => ![null, undefined, '', NaN].includes(_));
customCoalesce(undefined, null, NaN, '', 'Waldo'); // "Waldo"
```
