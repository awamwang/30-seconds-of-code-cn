---
title: defaults
tags: object,intermediate
---

Assigns default values for all properties in an object that are `undefined`.

把默认值赋给一个对象中所有`undefined`的属性。

- Use `Object.assign()` to create a new empty object and copy the original one to maintain key order, use `Array.prototype.reverse()` and the spread operator `...` to combine the default values from left to right, finally use `obj` again to overwrite properties that originally had a value.

使用`Object.assign()`来创建一个新的空对象，然后拷贝一个原始对象维护键的顺序，使用`Array.prototype.reverse()`和展开从操作符`...`来把默认值从左到右整合到对象中，最后再次使用`obj`来覆盖（恢复）原来就有值的属性。

```js
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);
```

```js
defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
```