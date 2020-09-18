---
title: flattenObject
tags: object,recursion,intermediate
---

Flatten an object with the paths for keys.

用路径和键列表的方式把一个对象扁平化。（路径就是用`.`分隔对象层级）

- Use recursion.
- Use `Object.keys(obj)` combined with `Array.prototype.reduce()` to convert every leaf node to a flattened path node.
- If the value of a key is an object, the function calls itself with the appropriate `prefix` to create the path using `Object.assign()`.
- Otherwise, it adds the appropriate prefixed key-value pair to the accumulator object.
- You should always omit the second argument, `prefix`, unless you want every key to have a prefix.

使用递归。使用`Object.keys(obj)`和`Array.prototype.reduce()`来把每一个叶子节点转换为扁平化路径节点。如果这个键的值是一个对象，这个函数则使用`Object.assign()`来用合适的`prefix`调用自己来创建一个路径。否则，它把合适的前缀键值对添加到累加器中。除非你想要每个键都有一个前缀，否则你应该总是不传第二个参数`prefix`。

```js
const flattenObject = (obj, prefix = '') =>
  Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? `${prefix}.` : '';
    if (typeof obj[k] === 'object' && obj[k] !== null && Object.keys(obj[k]).length > 0)
      Object.assign(acc, flattenObject(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});
```

```js
flattenObject({ a: { b: { c: 1 } }, d: 1 }); // { 'a.b.c': 1, d: 1 }
```
