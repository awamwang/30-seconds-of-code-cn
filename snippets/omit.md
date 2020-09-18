---
title: omit
tags: object,array,intermediate
---

Omits the key-value pairs corresponding to the given keys from an object.

根据给出的键列表把一个对象中的键值对去除掉。

- Use `Object.keys(obj)`, `Array.prototype.filter()` and `Array.prototype.includes()` to remove the provided keys.
- Use `Array.prototype.reduce()` to convert the filtered keys back to an object with the corresponding key-value pairs.

使用`Object.keys(obj)`, `Array.prototype.filter()`和`Array.prototype.includes()`来删除给出的键列表。使用`Array.prototype.reduce()`来把过滤出的键转换回拥有相应键值对一个对象。

```js
const omit = (obj, arr) =>
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
```

```js
omit({ a: 1, b: '2', c: 3 }, ['b']); // { 'a': 1, 'c': 3 }
```
