---
title: isWritableStream
tags: node,type,intermediate
---

Checks if the given argument is a writable stream.

检测给出的参数是否是可读的流。

Check if the value is different from `null`, use `typeof` to check if the value is of type `object` and the `pipe` property is of type `function`.
Additionally check if the `typeof` the `_write` and `_writableState` properties are `function` and `object` respectively.

检查给出的值是否不是`null`，使用`typeof`来检查这个值是否是`object`类型，它的`pipe`属性是否是一个`function`类型。再检查它的`_write`、和`_writableState`属性的`typeof`是否分别是`function`和`object`类型。

```js
const isWritableStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._write === 'function' &&
  typeof val._writableState === 'object';
```

```js
const fs = require('fs');
isWritableStream(fs.createWriteStream('test.txt')); // true
```