---
title: forOwnRight
tags: object,intermediate
---

Iterates over all own properties of an object in reverse, running a callback for each one.

反向的对对象中每个自有属性（按照默认顺序相反的顺序）都迭代的执行一个回调。

Use `Object.keys(obj)` to get all the properties of the object, `Array.prototype.reverse()` to reverse their order and `Array.prototype.forEach()` to run the provided function for each key-value pair. The callback receives three arguments - the value, the key and the object.

使用`Object.keys(obj)`来获取对象的每个属性，使用`Array.prototype.reverse()`来反转它们的顺序，`Array.prototype.forEach()`来对每个键值对运行给定的函数。回调函数接受三个参数——值，键，和对象。

```js
const forOwnRight = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .forEach(key => fn(obj[key], key, obj));
```

```js
forOwnRight({ foo: 'bar', a: 1 }, v => console.log(v)); // 1, 'bar'
```