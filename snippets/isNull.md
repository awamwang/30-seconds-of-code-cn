---
title: isNull
tags: type,beginner
---

Returns `true` if the specified value is `null`, `false` otherwise.

如果指定的值是`null`则返回`true`，否则返回`false`。

- Use the strict equality operator to check if the value of `val` is equal to `null`.

使用严格相等操作符来检查`val`的值是否等于`null`。

```js
const isNull = val => val === null;
```

```js
isNull(null); // true
```
