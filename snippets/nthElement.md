---
title: nthElement
tags: array,beginner
---

Returns the nth element of an array.

返回数组中第nth个元素。

- Use `Array.prototype.slice()` to get an array containing the nth element at the first place.
- If the index is out of bounds, return `undefined`.
- Omit the second argument, `n`, to get the first element of the array.

使用`Array.prototype.slice()`来获得一个把第nth个元素放在开头的新数组。如果index超出边界，返回`undefined`。如果不传第二个参数`n`，则返回数组的第一个元素。

```js
const nthElement = (arr, n = 0) => (n === -1 ? arr.slice(n) : arr.slice(n, n + 1))[0];
```

```js
nthElement(['a', 'b', 'c'], 1); // 'b'
nthElement(['a', 'b', 'b'], -3); // 'a'
```
