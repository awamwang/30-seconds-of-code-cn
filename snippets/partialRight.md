---
title: partialRight
tags: function,intermediate
---

Creates a function that invokes `fn` with `partials` appended to the arguments it receives.

创建一个用部分参数`partials`放到新接收的参数尾部来执行`fn`的函数。

Use the spread operator (`...`) to append `partials` to the list of arguments of `fn`.

使用展开操作符(`...`)来把`partials`放到`fn`的参数列表尾部。

```js
const partialRight = (fn, ...partials) => (...args) => fn(...args, ...partials);
```

```js
const greet = (greeting, name) => greeting + ' ' + name + '!';
const greetJohn = partialRight(greet, 'John');
greetJohn('Hello'); // 'Hello John!'
```