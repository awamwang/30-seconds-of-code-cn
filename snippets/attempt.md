---
title: attempt
tags: function,intermediate
---

Attempts to invoke a function with the provided arguments, returning either the result or the caught error object.

尝试用给定的参数执行一个函数，返回结果或者捕获一个错误对象。

- Use a `try... catch` block to return either the result of the function or an appropriate error.

使用`try... catch`块返回函数结果或者一个合适的错误。

```js
const attempt = (fn, ...args) => {
  try {
    return fn(...args);
  } catch (e) {
    return e instanceof Error ? e : new Error(e);
  }
};
```

```js
var elements = attempt(function(selector) {
  return document.querySelectorAll(selector);
}, '>_>');
if (elements instanceof Error) elements = []; // elements = []
```
