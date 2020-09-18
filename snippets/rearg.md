---
title: rearg
tags: function,intermediate
---

Creates a function that invokes the provided function with its arguments arranged according to the specified indexes.

用给定的函数创建一个新函数，新函数的参数按照指定顺序重新排序传入。

- Use `Array.prototype.map()` to reorder arguments based on `indexes` in combination with the spread operator (`...`) to pass the transformed arguments to `fn`.

使用 `Array.prototype.map()`把参数根据传入的`indexes`重新排序，然后使用展开操作符(`...`)把转换后的参数列表传给`fn`。

```js
const rearg = (fn, indexes) => (...args) => fn(...indexes.map(i => args[i]));
```

```js
var rearged = rearg(
  function(a, b, c) {
    return [a, b, c];
  },
  [2, 0, 1]
);
rearged('b', 'c', 'a'); // ['a', 'b', 'c']
```
