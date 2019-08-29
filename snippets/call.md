---
title: call
tags: adapter,function,intermediate
---

Given a key and a set of arguments, call them when given a context. Primarily useful in composition.

用给的一个`key`值和一组参数，在提供的`context`下调用函数（context理解为一个对象，key值理解为对象下的方法名），主要在组合模式中使用。（这个操作使JS中的对象方法不依赖于对象存在，使得动态类的构造成为可能）。

Use a closure to call a stored key with stored arguments.

用闭包把`key`名称和传入的参数存储，在更换`context`可以方便的调用。

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