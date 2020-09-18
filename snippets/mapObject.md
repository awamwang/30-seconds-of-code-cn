---
title: mapObject
tags: array,object,intermediate
---

Maps the values of an array to an object using a function, where the key-value pairs consist of the original value as the key and the result of the function as the value.

应用一个函数把数组中的值映射到一个以原始值作为key、函数结果作为value的key-value对象中。

- Use `Array.prototype.reduce()` to apply `fn` to each element in `arr` and combine the results into an object.
- Use `el` as the key for each property and the result of `fn` as the value.

使用`Array.prototype.reduce()`对`arr`中的每个元素应用`fn`函数，并且把结果整合到一个对象中。这个对象中，使用`el`作为每个属性的键，使用`fn`函数的结果作为值。

```js
const mapObject = (arr, fn) =>
  arr.reduce((acc, el, i) => {
    acc[el] = fn(el, i, arr);
    return acc;
  }, {});
```

```js
mapObject([1, 2, 3], a => a * a); // { 1: 1, 2: 4, 3: 9 }
```
