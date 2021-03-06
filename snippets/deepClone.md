---
title: deepClone
tags: object,recursion,intermediate
---

Creates a deep clone of an object. 
Clones primitives, arrays and objects, excluding class instances.

创建一个对象的深拷贝。

- Use recursion.
- Check if the passed object is `null` and, if so, return `null`.
- Use `Object.assign()` and an empty object (`{}`) to create a shallow clone of the original.
- Use `Object.keys()` and `Array.prototype.forEach()` to determine which key-value pairs need to be deep cloned.
- If the object is an `Array`, set the `clone`'s `length` to that of the original and use `Array.from(clone)` to create a clone.

使用递归。使用`Object.assign()`和一个空对象(`{}`)来创建一个原始对象的浅拷贝。使用`Object.keys()`和`Array.prototype.forEach()`来确定哪个键值对需要深拷贝。
如果这个object参数是`Array`，则将`clone`的`length`设置为原始对象的长度，然后使用`Array.from(clone)`创建一个拷贝。

```js
const deepClone = obj => {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  );
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
};
```

```js
const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj
```
