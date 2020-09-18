---
title: dig
tags: object,recursion,intermediate
---

Returns the target value in a nested JSON object, based on the given key.

根据给出的键，返回嵌套JSON对象中的目标值。

- Use the `in` operator to check if `target` exists in `obj`.
- If found, return the value of `obj[target]`, otherwise use `Object.values(obj)` and `Array.prototype.reduce()` to recursively call `dig` on each nested object until the first matching key/value pair is found.

使用`in`操作符来检查`obj`中是否存在`target`。如果找到了，返回`obj[target]`的值，否则使用`Object.values(obj)`和`Array.prototype.reduce()`来对嵌套对象递归调用`dig`直到第一个匹配的键值对被找到。

```js
const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc;
        if (typeof val === 'object') return dig(val, target);
      }, undefined);
```

```js
const data = {
  level1: {
    level2: {
      level3: 'some data'
    }
  }
};
dig(data, 'level3'); // 'some data'
dig(data, 'level4'); // undefined
```