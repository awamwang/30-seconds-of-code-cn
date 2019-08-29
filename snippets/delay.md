---
title: delay
tags: function,intermediate
---

Invokes the provided function after `wait` milliseconds.

`wait`毫秒后执行给定的函数。

Use `setTimeout()` to delay execution of `fn`.
Use the spread (`...`) operator to supply the function with an arbitrary number of arguments.

使用`setTimeout()`来延迟执行`fn`。使用展开操作符(`...`)来给函数提供相应参数数目的参数列表。

```js
const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);
```

```js
delay(
  function(text) {
    console.log(text);
  },
  1000,
  'later'
); // Logs 'later' after one second.
```