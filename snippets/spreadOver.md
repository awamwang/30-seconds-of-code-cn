---
title: spreadOver
tags: adapter,intermediate
---

Takes a variadic function and returns a closure that accepts an array of arguments to map to the inputs of the function.

传入一个可变的函数，返回一个闭包，它接受参数数组来代替原本的输入。

Use closures and the spread operator (`...`) to map the array of arguments to the inputs of the function.

使用闭包和展开操作符(`...`)来把参数数组映射给函数输入。

```js
const spreadOver = fn => argsArr => fn(...argsArr);
```

```js
const arrayMax = spreadOver(Math.max);
arrayMax([1, 2, 3]); // 3
```