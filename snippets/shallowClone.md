---
title: shallowClone
tags: object,beginner
---

Creates a shallow clone of an object.

创建一个对象的浅拷贝。

Use `Object.assign()` and an empty object (`{}`) to create a shallow clone of the original.

使用`Object.assign()`和一个空对象来创建一个原始对象的浅拷贝。

```js
const shallowClone = obj => Object.assign({}, obj);
```

```js
const a = { x: true, y: 1 };
const b = shallowClone(a); // a !== b
```