---
title: isUndefined
tags: type,beginner
---

Returns `true` if the specified value is `undefined`, `false` otherwise.

如果指定的值是`undefined`则返回`true`，否则返回`false`。

- Use the strict equality operator to check if `val` is equal to `undefined`.

使用严格相等操作符来检查`val`的值是否等于`undefined`。

```js
const isUndefined = val => val === undefined;
```

```js
isUndefined(undefined); // true
```
