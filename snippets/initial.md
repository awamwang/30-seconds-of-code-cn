---
title: initial
tags: array,beginner
---

Returns all the elements of an array except the last one.

返回除最后一个元素的数组。

- Use `arr.slice(0,-1)` to return all but the last element of the array.

使用`arr.slice(0,-1)`来返回排除了最后一个元素的数组。

```js
const initial = arr => arr.slice(0, -1);
```

```js
initial([1, 2, 3]); // [1,2]
```
