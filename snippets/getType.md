---
title: getType
tags: type,beginner
---

Returns the native type of a value.

返回值的原生类型。

Return `'undefined'` or `'null'` if the value is `undefined` or `null`.
Otherwise, use `Object.prototype.constructor.name` to get the name of the constructor.

如果值是`undefined`或`null`，则返回`'undefined'`或`'null'`。否则使用`Object.prototype.constructor.name`来获取构造器的名称。

```js
const getType = v => (v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name);
```

```js
getType(new Set([1, 2, 3])); // 'Set'
```
