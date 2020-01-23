---
title: pull
tags: array,intermediate
---

Mutates the original array to filter out the values specified.

从一个原始数组中过滤掉给定的值（直接改变原始数组）。

Use `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.
Use `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.

使用`Array.prototype.filter()`和`Array.prototype.includes()`把不需要的值去掉。使用`Array.prototype.length = 0`，通过把数组的长度置为0重置传入的值，再使用`Array.prototype.push()`，用提取出来的值来重新建立数组。

_(For a snippet that does not mutate the original array see [`without`](#without))_

_(不改变原始数组的代码片段参见 [`without`](#without))_

```js
const pull = (arr, ...args) => {
  let argState = Array.isArray(args[0]) ? args[0] : args;
  let pulled = arr.filter(v => !argState.includes(v));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
};
```

```js
let myArray = ['a', 'b', 'c', 'a', 'b', 'c'];
pull(myArray, 'a', 'c'); // myArray = [ 'b', 'b' ]
```
