---
title: isString
tags: type,string,beginner
---

Checks if the given argument is a string. Only works for string primitives.

检查给出的参数是否是一个字符串，只对原始的字符串类型生效。

Use `typeof` to check if a value is classified as a string primitive.

使用`typeof`来检查一个值是否被分类为一个原始的字符串类型。

```js
const isString = val => typeof val === 'string';
```

```js
isString('10'); // true
```