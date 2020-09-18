---
title: isFunction
tags: type,function,beginner
---

Checks if the given argument is a function.

检查给出的参数是否是一个函数。

- Use `typeof` to check if a value is classified as a function primitive.

使用`typeof`来检查一个值是否被分类为一个原生的函数类型。

```js
const isFunction = val => typeof val === 'function';
```

```js
isFunction('x'); // false
isFunction(x => x); // true
```
