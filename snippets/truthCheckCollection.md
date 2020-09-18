---
title: truthCheckCollection
tags: object,logic,array,intermediate
---

Checks if the predicate (second argument) is truthy on all elements of a collection (first argument).

检查一个集合（第一个参数）中的所有元素的断言（第二个参数）是否为真值。

- Use `Array.prototype.every()` to check if each passed object has the specified property and if it returns a truthy value.

使用`Array.prototype.every()`来检查是否传入的对象有指定的属性，并且它是否返回真值。

```js
const truthCheckCollection = (collection, pre) => collection.every(obj => obj[pre]);
```

```js
truthCheckCollection([{ user: 'Tinky-Winky', sex: 'male' }, { user: 'Dipsy', sex: 'male' }], 'sex'); // true
```
