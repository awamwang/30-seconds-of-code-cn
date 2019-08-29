---
title: omitBy
tags: object,array,function,intermediate
---

Creates an object composed of the properties the given function returns falsy for. The function is invoked with two arguments: (value, key).

创建一个由给出的函数作用后返回假值的属性组成的对象。这个函数执行时有两个参数：(value, key)。

Use `Object.keys(obj)` and `Array.prototype.filter()`to remove the keys for which `fn` returns a truthy value.
Use `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.

使用`Object.keys(obj)`和`Array.prototype.filter()`来去除`fn`函数返回真值的键。使用`Array.prototype.reduce()`来把过滤后的键转换回一个包含到对应的键值对的对象。

```js
const omitBy = (obj, fn) =>
  Object.keys(obj)
    .filter(k => !fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
```

```js
omitBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'); // { b: '2' }
```