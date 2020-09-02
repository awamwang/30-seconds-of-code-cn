---
title: countBy
tags: array,object,intermediate
---

Groups the elements of an array based on the given function and returns the count of elements in each group.

根据给定的函数对数组中元素分组，返回每组中元素的个数。

Use `Array.prototype.map()` to map the values of an array to a function or property name.
Use `Array.prototype.reduce()` to create an object, where the keys are produced from the mapped results.

使用`Array.prototype.map()`对数组中每个元素调用`fn`或取出`fn`的属性值（支持两种用法）。使用`Array.prototype.reduce()`来建立一个属性键值来自map结果的计数对象。

```js
const countBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
```

```js
countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}
countBy(['one', 'two', 'three'], 'length'); // {3: 2, 5: 1}
countBy([{ count: 5 }, { count: 10 }, { count: 5 }], x => x.count) // {5: 2, 10: 1}
```
