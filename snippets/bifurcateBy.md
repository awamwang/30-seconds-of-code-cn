---
title: bifurcateBy
tags: array,function,intermediate
---

Splits values into two groups according to a predicate function, which specifies which group an element in the input collection belongs to. If the predicate function returns a truthy value, the collection element belongs to the first group; otherwise, it belongs to the second group.

根据给定的断言函数`fn`（决定一个元素属于哪个分组的函数）把一组值分成两组。如果这个断言函数返回真值，这个元素被归到第一组；否则，它被归到第二组。

Use `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on the value returned by `fn` for each element.

使用`Array.prototype.reduce()` 和 `Array.prototype.push()`来对所有元素作用`fn`，并且基于其返回值分组。`fn`有两个参数`val`, `i`。

```js
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
```

```js
bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'); // [ ['beep', 'boop', 'bar'], ['foo'] ]
```