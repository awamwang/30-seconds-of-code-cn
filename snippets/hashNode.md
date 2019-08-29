---
title: hashNode
tags: node,utility,promise,intermediate
---

Creates a hash for a value using the [SHA-256](https://en.wikipedia.org/wiki/SHA-2) algorithm. Returns a promise.

使用[SHA-256](https://en.wikipedia.org/wiki/SHA-2)算法为值创建hash。返回一个promise。

Use `crypto` API to create a hash for the given value, `setTimeout` to prevent blocking on a long operation, and a `Promise` to give it a familiar interface.

使用`crypto`API来为给定的值创建hash，使用`setTimeout`来避免长时间操作时阻塞，并使用`Promise`来给出一个通用接口。

```js
const crypto = require('crypto');
const hashNode = val =>
  new Promise(resolve =>
    setTimeout(
      () =>
        resolve(
          crypto
            .createHash('sha256')
            .update(val)
            .digest('hex')
        ),
      0
    )
  );
```

```js
hashNode(JSON.stringify({ a: 'a', b: [1, 2, 3, 4], foo: { c: 'bar' } })).then(console.log); // '04aa106279f5977f59f9067fa9712afc4aedc6f5862a8defc34552d8c7206393'
```