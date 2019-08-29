---
title: isBoolean
tags: type,beginner
---

Checks if the given argument is a native boolean element.

检查给出的参数是否是一个原生boolean元素。

Use `typeof` to check if a value is classified as a boolean primitive.

使用`typeof`来检查一个值是否被分类为一个boolean原生类型。

```js
const isBoolean = val => typeof val === 'boolean';
```

```js
isBoolean(null); // false
isBoolean(false); // true
```