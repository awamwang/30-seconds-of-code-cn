---
title: bind
tags: function,object,intermediate
---

Creates a function that invokes `fn` with a given context, optionally adding any additional supplied parameters to the beginning of the arguments.

创建一个在指定上下文执行`fn`的函数，可选的在参数列表的头部添加额外提供的参数。

- Return a `function` that uses `Function.prototype.apply()` to apply the given `context` to `fn`.
- Use `Array.prototype.concat()` to prepend any additional supplied parameters to the arguments.

返回一个的函数`function`，它使用`Function.prototype.apply()`来把给定的`context`应用到`fn`。使用`Array.prototype.concat()`来把给定的额外参数添加到参数列表的头部。

```js
const bind = (fn, context, ...boundArgs) => (...args) => fn.apply(context, [...boundArgs, ...args]);
```

```js
function greet(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
}
const freddy = { user: 'fred' };
const freddyBound = bind(greet, freddy);
console.log(freddyBound('hi', '!')); // 'hi fred!'
```
