---
title: isPlainObject
tags: type,object,intermediate
---

Checks if the provided value is an object created by the Object constructor.

检查给出的值是否是一个对象构造器创建的对象。

- Check if the provided value is truthy, use `typeof` to check if it is an object and `Object.constructor` to make sure the constructor is equal to `Object`.

检查给出的值是否为真值，使用`typeof`来检查它是否是一个对象，使用`Object.constructor`来确保它的构造器等于`Object`。

```js
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;
```

```js
isPlainObject({ a: 1 }); // true
isPlainObject(new Map()); // false
```
