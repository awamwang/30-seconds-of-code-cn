---
title: invertKeyValues
tags: object,function,intermediate
---

Inverts the key-value pairs of an object, without mutating it. The corresponding inverted value of each inverted key is an array of keys responsible for generating the inverted value. If a function is supplied, it is applied to each inverted key.

转化一个对象的键值对（不改变对象本身）。每个转化后的键的对应的转化后的值是一个与产生的转化后的值对应的键列表。如果提供了函数，它会被应用到每个转化后的值。

Use `Object.keys()` and `Array.prototype.reduce()` to invert the key-value pairs of an object and apply the function provided (if any).
Omit the second argument, `fn`, to get the inverted keys without applying a function to them.

使用`Object.keys()`和`Array.prototype.reduce()`来转化一个对象的键值对，然后应用这个给出的函数（如果有的话）。如果不传第二个参数`fn`，则不对转化后的键应用函数。

```js
const invertKeyValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, key) => {
    const val = fn ? fn(obj[key]) : obj[key];
    acc[val] = acc[val] || [];
    acc[val].push(key);
    return acc;
  }, {});
```

```js
invertKeyValues({ a: 1, b: 2, c: 1 }); // { 1: [ 'a', 'c' ], 2: [ 'b' ] }
invertKeyValues({ a: 1, b: 2, c: 1 }, value => 'group' + value); // { group1: [ 'a', 'c' ], group2: [ 'b' ] }
```