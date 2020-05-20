---
title: functionName
tags: function,beginner
---

Logs the name of a function.

打印出函数的名称。

Use `console.debug()` and the `name` property of the passed method to log the method's name to the `debug` channel of the console.

使用`console.debug()`和传入方法的`name`属性来把方法的名称输出到console的`debug`通道。

```js
const functionName = fn => (console.debug(fn.name), fn);
```

```js
functionName(Math.max); // max (logged in debug channel of console)
```
