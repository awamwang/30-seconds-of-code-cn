---
title: deepFreeze
tags: object,recursion,intermediate
---

Deep freezes an object.

深层冻结一个对象。

Calls `Object.freeze(obj)` recursively on all unfrozen properties of passed object that are `instanceof` object.
Use `Object.keys()` to get all the properties of the passed object, `Array.prototype.forEach()` to iterate over them.
Call `Object.freeze(obj)` recursively on all properties, checking if each one is frozen using `Object.isFrozen()` and applying `deepFreeze()` as necessary.
Finally, use `Object.freeze()` to freeze the given object.

在一个传入的属于Object实例的对象上，递归的对它的所有未冻结属性调用`Object.freeze(obj)`。
使用`Object.freeze(obj)`来递归的获取传入对象的所有属性，使用`Array.prototype.forEach()`来迭代它们。
对所有属性递归的调用`Object.freeze(obj)`，使用`Object.isFrozen()`来检查每个属性是否已经冻结，如果需要则调用`deepFreeze()`来冻结它。
最终，使用`Object.freeze()`来冻结给出的对象。

```js
const deepFreeze = obj => {
  Object.keys(obj).forEach(prop => {
    if (typeof obj[prop] === 'object' && !Object.isFrozen(obj[prop])) deepFreeze(obj[prop]);
  });
  return Object.freeze(obj);
};
```

```js
'use strict';

const o = deepFreeze([1, [2, 3]]);

o[0] = 3; // not allowed
o[1][0] = 4; // not allowed as well
```
