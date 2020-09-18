---
title: isEmpty
tags: type,array,object,string,beginner
---

Returns true if the a value is an empty object, collection, has no enumerable properties or is any type that is not considered a collection.

如果一个值是一个空对象、集合、映射或者非重复集合，或者没有可枚举属性，或者是任何一种不被当做集合的类型，则返回真。

- Check if the provided value is `null` or if its `length` is equal to `0`.

检查给出的值是否是`null`或者是否它的`length`属性等于`0`。

```js
const isEmpty = val => val == null || !(Object.keys(val) || val).length;
```

```js
isEmpty([]); // true
isEmpty({}); // true
isEmpty(''); // true
isEmpty([1, 2]); // false
isEmpty({ a: 1, b: 2 }); // false
isEmpty('text'); // false
isEmpty(123); // true - type is not considered a collection
isEmpty(true); // true - type is not considered a collection
```
