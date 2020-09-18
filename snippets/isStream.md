---
title: isStream
tags: node,type,intermediate
---

Checks if the given argument is a stream.

检测给出的参数是否是一个流。

- Check if the value is different from `null`, use `typeof` to check if the value is of type `object` and the `pipe` property is of type `function`.

检查给出的值是否不是`null`，使用`typeof`来检查这个值是否是`object`类型，它的`pipe`属性是否是一个`function`类型。

```js
const isStream = val => val !== null && typeof val === 'object' && typeof val.pipe === 'function';
```

```js
const fs = require('fs');
isStream(fs.createReadStream('test.txt')); // true
```
