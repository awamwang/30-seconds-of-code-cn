---
title: objectToPairs
tags: object,array,beginner
---

Creates an array of key-value pair arrays from an object.

从一个对象创建一个键值对数组。

- Use `Object.entries()` to get an array of key-value pair arrays from the given object.

使用`Object.entries()`来从给出的对象中获取一个“键-值”对数组。

```js
const objectToPairs = obj => Object.entries(obj);
```

```js
objectToPairs({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
```
