---
title: bifurcate
tags: array,intermediate
---

Splits values into two groups. If an element in `filter` is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.

把一组值分为两组。如果一个元素在`filter`中为真（对应位置的布尔值为真，filter为一个布尔值列表），它被归到第一组；否则，它被归到第二组。

- Use `Array.prototype.reduce()` and `Array.prototype.push()` to add elements to groups, based on `filter`.

使用`Array.prototype.reduce()` 和 `Array.prototype.push()`来对所有元素作用`filter`，并且基于其返回值分组。

```js
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]); // 巧妙的用reduce初始化分组[[], []]，然后在累加过程中把每个元素放到相应分组，精简了代码
```

```js
bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]
```
