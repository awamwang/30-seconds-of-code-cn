---
title: pullBy
tags: array,function,advanced
---

Mutates the original array to filter out the values specified, based on a given iterator function.

改变原始数组，基于给定的遍历函数来过滤掉给定的值。

Check if the last argument provided in a function.
Use `Array.prototype.map()` to apply the iterator function `fn` to all array elements.
Use `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.
Use `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.

检查最后一个参数是否是函数类型。使用`Array.prototype.map()`来对数组中所有元素遍历调用`fn`。使用`Array.prototype.filter()` 和 `Array.prototype.includes()`来去除掉不需要的值。使用`Array.prototype.length = 0`，通过把数组的长度置为0重置传入的值；再使用`Array.prototype.push()`，用提取出来的值来重新建立数组。

```js
const pullBy = (arr, ...args) => {
  const length = args.length;
  let fn = length > 1 ? args[length - 1] : undefined;
  fn = typeof fn == 'function' ? (args.pop(), fn) : undefined;
  let argState = (Array.isArray(args[0]) ? args[0] : args).map(val => fn(val));
  let pulled = arr.filter((v, i) => !argState.includes(fn(v)));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};
```

```js
var myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
pullBy(myArray, [{ x: 1 }, { x: 3 }], o => o.x); // myArray = [{ x: 2 }]
```