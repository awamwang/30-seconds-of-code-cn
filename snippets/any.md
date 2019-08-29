---
title: any
tags: array,function,beginner
---

Returns `true` if the provided predicate function returns `true` for at least one element in a collection, `false` otherwise.

集合中至少一个元素被提供的断言函数作用后返回`true`，则整体返回`true`；否则返回`false`。

Use `Array.prototype.some()` to test if any elements in the collection return `true` based on `fn`.
Omit the second argument, `fn`, to use `Boolean` as a default.

使用`Array.prototype.some()`来验证集合中是否有元素被提供的断言函数`fn`作用后返回`true` 。不传第二个参数`fn`，则使用默认的`Boolean`（布尔型的构造函数）作为默认值。

```js
const any = (arr, fn = Boolean) => arr.some(fn);
```

```js
any([0, 1, 2, 0], x => x >= 2); // true
any([0, 0, 1, 0]); // true
```