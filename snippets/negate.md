---
title: negate
tags: function,beginner
---

Negates a predicate function.

否定化一个断言函数。

Take a predicate function and apply the not operator (`!`) to it with its arguments.

接收一个断言函数并把否定操作符(`!`)和参数应用给它。

```js
const negate = func => (...args) => !func(...args);
```

```js
[1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
```