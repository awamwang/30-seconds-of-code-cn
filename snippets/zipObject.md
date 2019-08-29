---
title: zipObject
tags: array,object,intermediate
---

Given an array of valid property identifiers and an array of values, return an object associating the properties to the values.

给定一个可用的属性名称数组和一个值的数组，返回一个把属性名称和值关联起来的对象。

Since an object can have undefined values but not undefined property pointers, the array of properties is used to decide the structure of the resulting object using `Array.prototype.reduce()`.

由于一个对象可能有undefined的值但属性指针不是undefined，属性名称列表配合`Array.prototype.reduce()`使用，用来确定结果对象的结构。

```js
const zipObject = (props, values) =>
  props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {});
```

```js
zipObject(['a', 'b', 'c'], [1, 2]); // {a: 1, b: 2, c: undefined}
zipObject(['a', 'b'], [1, 2, 3]); // {a: 1, b: 2}
```