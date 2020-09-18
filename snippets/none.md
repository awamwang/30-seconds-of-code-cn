---
title: none
tags: array,function,beginner
---

Returns `true` if the provided predicate function returns `false` for all elements in a collection, `false` otherwise.

如果给定集合中所有所有元素应用给定的断言函数都返回`false`，则整体返回`true`；否则返回`false`。

- Use `Array.prototype.some()` to test if any elements in the collection return `true` based on `fn`.
- Omit the second argument, `fn`, to use `Boolean` as a default.

使用`Array.prototype.some()`来测试集合中是否有应用`fn`后返回`true`的元素。如果不传第二个参数，则使用`Boolean`作为默认值。

```js
const none = (arr, fn = Boolean) => !arr.some(fn);
```

```js
none([0, 1, 3, 0], x => x == 2); // true
none([0, 0, 0]); // true
```