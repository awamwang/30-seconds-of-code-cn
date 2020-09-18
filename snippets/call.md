---
title: call
tags: function,intermediate
---

Given a key and a set of arguments, call them when given a context. Primarily useful in composition.

给定一个键和一组参数，在给定的上下文中调用它们。主要用于合成。

- Use a closure to call a stored key with stored arguments.

使用闭包调用带有存储参数的存储键。

```js
const call = (key, ...args) => context => context[key](...args);
```

```js
Promise.resolve([1, 2, 3])
  .then(call('map', x => 2 * x))
  .then(console.log); // [ 2, 4, 6 ]
const map = call.bind(null, 'map');
Promise.resolve([1, 2, 3])
  .then(map(x => 2 * x))
  .then(console.log); // [ 2, 4, 6 ]
```
