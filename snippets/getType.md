---
title: getType
tags: type,beginner
---

Returns the native type of a value.

返回值的原生类型。

Returns lowercased constructor name of value, `"undefined"` or `"null"` if value is `undefined` or `null`.

返回值的小写形式的构造器名称，如果值是`undefined`或`null`则返回`"undefined"`或`"null"`。

```js
const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();
```

```js
getType(new Set([1, 2, 3])); // 'set'
```