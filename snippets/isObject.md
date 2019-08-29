---
title: isObject
tags: type,object,beginner
---

Returns a boolean determining if the passed value is an object or not.

返回一个布尔判定，判定传入的值是一个对象或者不是。

Uses the  `Object` constructor to create an object wrapper for the given value. 
If the value is `null` or `undefined`, create and return an empty object. Οtherwise, return an object of a type that corresponds to the given value.

使用`Object`构造函数来创建一个给出值的对象包裹。如果这个值是`null`或`undefined`，创建并返回一个空对象。否则返回一个与给出值相应类型的对象。

```js
const isObject = obj => obj === Object(obj);
```

```js
isObject([1, 2, 3, 4]); // true
isObject([]); // true
isObject(['Hello!']); // true
isObject({ a: 1 }); // true
isObject({}); // true
isObject(true); // false
```