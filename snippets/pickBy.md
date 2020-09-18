---
title: pickBy
tags: object,array,function,intermediate
---

Creates an object composed of the properties the given function returns truthy for. The function is invoked with two arguments: (value, key).

创建一个给定的函数返回真值的属性组成的对象。这个函数接受两个参数：(value, key)。

- Use `Object.keys(obj)` and `Array.prototype.filter()`to remove the keys for which `fn` returns a falsy value.
- Use `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.

使用`Object.keys(obj)`和`Array.prototype.filter()`来把`fn`返回假值的键删除。使用`Array.prototype.reduce()`把过滤出来的键列表用相应的键值对转换回一个新对象中。

```js
const pickBy = (obj, fn) =>
  Object.keys(obj)
    .filter(k => fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
```

```js
pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'); // { 'a': 1, 'c': 3 }
```
