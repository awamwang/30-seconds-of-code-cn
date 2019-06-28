### isDuplexStream

Checks if the given argument is a duplex (readable and writable) stream.

检查给出的参数是否是双向的（可读可写的）流。

Check if the value is different from `null`, use `typeof` to check if a value is of type `object` and the `pipe` property is of type `function`.
Additionally check if the `typeof` the `_read`, `_write` and `_readableState`, `_writableState` properties are `function` and `object` respectively.

检查给出的值是否不是`null`，使用`typeof`来检查这个值是否是`object`类型，它的`pipe`属性是否是一个`function`类型。再检查它的`_read`、`_write`和`_readableState`, `_writableState`属性的`typeof`是否分别是`function`和`object`类型。

```js
const isDuplexStream = val =>
  val !== null &&
  typeof val === 'object' &&
  typeof val.pipe === 'function' &&
  typeof val._read === 'function' &&
  typeof val._readableState === 'object' &&
  typeof val._write === 'function' &&
  typeof val._writableState === 'object';
```

```js
const Stream = require('stream');
isDuplexStream(new Stream.Duplex()); // true
```
