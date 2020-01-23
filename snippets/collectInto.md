---
title: collectInto
tags: function,array,intermediate
---

Changes a function that accepts an array into a variadic function.

把一个接受数组参数的函数改造成接受可变数目参数的函数。

Given a function, return a closure that collects all inputs into an array-accepting function.

传入一个接受数组参数的函数，返回一个把所有参数收集到一个array后传给这个函数调用的闭包。

```js
const collectInto = fn => (...args) => fn(args);
```

```js
const Pall = collectInto(Promise.all.bind(Promise));
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = new Promise(resolve => setTimeout(resolve, 2000, 3));
Pall(p1, p2, p3).then(console.log); // [1, 2, 3] (after about 2 seconds)
```
