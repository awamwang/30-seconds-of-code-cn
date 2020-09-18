---
title: forOwn
tags: object,intermediate
---

Iterates over all own properties of an object, running a callback for each one.

对对象中每个自有属性都迭代的执行一个回调。

- Use `Object.keys(obj)` to get all the properties of the object, `Array.prototype.forEach()` to run the provided function for each key-value pair.
- The callback receives three arguments - the value, the key and the object.

使用`Object.keys(obj)`来获取对象的属性列表，`Array.prototype.forEach()`来对每个键值对运行给定的函数。回调函数接受三个参数——值，键，和对象。

```js
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));
```

```js
forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
```
