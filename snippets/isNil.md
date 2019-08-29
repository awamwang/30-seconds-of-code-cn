---
title: isNil
tags: type,beginner
---

Returns `true` if the specified value is `null` or `undefined`, `false` otherwise.

如果指定的值是`null`或者`undefined`则返回`true`，否则返回`false`。

Use the strict equality operator to check if the value and of `val` are equal to `null` or `undefined`.

使用严格相等操作符来检查`val`的值是否等于`null`或者`undefined`。

```js
const isNil = val => val === undefined || val === null;
```

```js
isNil(null); // true
isNil(undefined); // true
```