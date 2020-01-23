---
title: toHash
tags: array,intermediate
---

Reduces a given Array-like into a value hash (keyed data store).

把给定的Array-like转换为一个hash对象（有键值的数据存储形式）。

Given an Iterable or Array-like structure, call `Array.prototype.reduce.call()` on the provided object to step over it and return an Object, keyed by the reference value.

给定Iterable或者Array-like结构，对给定的对象使用`Array.prototype.reduce.call()`来遍历它，并返回一个用引用的值作为键值的对象。

```js
const toHash = (object, key) =>
  Array.prototype.reduce.call(
    object,
    (acc, data, index) => ((acc[!key ? index : data[key]] = data), acc),
    {}
  );
```

```js
toHash([4, 3, 2, 1]); // { 0: 4, 1: 3, 2: 2, 3: 1 }
toHash([{ a: 'label' }], 'a'); // { label: { a: 'label' } }
// A more in depth example:   一个更深入的例子：
let users = [
  { id: 1, first: 'Jon' },
  { id: 2, first: 'Joe' },
  { id: 3, first: 'Moe' }
];
let managers = [{ manager: 1, employees: [2, 3] }];
// We use function here because we want a bindable reference, but a closure referencing the hash would work, too.
// 因为我们需要一个可绑定的索引值，所以我们这里使用函数，但引用我们产生的hash对象的闭包是正常工作的。（把toHash结果作为this传给了map的参数函数）
managers.forEach(
  manager =>
    (manager.employees = manager.employees.map(function(id) {
      return this[id];
    }, toHash(users, 'id')))
);
managers; // [ { manager:1, employees: [ { id: 2, first: "Joe" }, { id: 3, first: "Moe" } ] } ]
```