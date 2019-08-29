---
title: isNumber
tags: type,math,beginner
---

Checks if the given argument is a number.

检查给出的参数是否是一个数字。

Use `typeof` to check if a value is classified as a number primitive. 
To safeguard against `NaN`, check if `val === val` (as `NaN` has a `typeof` equal to `number` and is the only value not equal to itself).

使用`typeof`来检查一个值是否被分类为一个原生数字类型。为了确保关于`NaN`的类型安全，检查`val === val`（因为`NaN`的`typeof`也是`number`，但它的值不等于它本身）（检查`NaN`的常见方法）

```js
const isNumber = val => typeof val === 'number' && val === val;
```

```js
isNumber(1); // true
isNumber('1'); // false
isNumber(NaN); // false
```