---
title: head
tags: array,beginner
---

Returns the head of a list.

返回列表的头部。

- Check if `arr` is truthy and has a `length` property, use `arr[0]` if possible to return the first element, otherwise return `undefined`.

检查`arr`是否为真，并且它有一个`length`属性。如果可能的话，使用`arr[0]`来返回第一个元素，否则返回`undefined`。

```js
const head = arr => (arr && arr.length ? arr[0] : undefined);
```

```js
head([1, 2, 3]); // 1
head([]); // undefined
head(null); // undefined
head(undefined); // undefined
```
