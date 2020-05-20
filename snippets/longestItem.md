---
title: longestItem
tags: array,string,intermediate
---

Takes any number of iterable objects or objects with a `length` property and returns the longest one.
If multiple objects have the same length, the first one will be returned.
Returns `undefined` if no arguments are provided.

接收任意数量的可迭代对象（或有`length`属性的对象）并返回最长的一个。如果其中多个对象有相同的长度，将返回第一个。如果没有传入参数，返回`undefined`。

Use `Array.prototype.reduce()`, comparing the `length` of objects to find the longest one.

使用`Array.prototype.reduce()`来比较项目的`length`来找到最长的一个。

```js
const longestItem = (...vals) => vals.reduce((a, x) => (x.length > a.length ? x : a));
```

```js
longestItem('this', 'is', 'a', 'testcase'); // 'testcase'
longestItem(...['a', 'ab', 'abc']); // 'abc'
longestItem(...['a', 'ab', 'abc'], 'abcd'); // 'abcd'
longestItem([1, 2, 3], [1, 2], [1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
longestItem([1, 2, 3], 'foobar'); // 'foobar'
```
