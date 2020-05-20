---
title: isPrimitive
tags: type,function,array,string,intermediate
---

Returns a boolean determining if the passed value is primitive or not.

返回一个布尔判定， 它判定传入的值是否是原始的类型。

Create an object from `val` and compare it with `val` to determine if the passed value is primitive (i.e. not equal to the created object).

从`val`创建一个对象，把它和`val`本身比较来判定传入的值是否是原始的类型（例如：不等于创建的对象）。

```js
const isPrimitive = val => Object(val) !== val;
```

```js
isPrimitive(null); // true
isPrimitive(undefined); // true
isPrimitive(50); // true
isPrimitive('Hello!'); // true
isPrimitive(false); // true
isPrimitive(Symbol()); // true
isPrimitive([]); // false
isPrimitive({}); // false
```
