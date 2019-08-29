---
title: nodeListToArray
tags: browser,array,beginner
---

Converts a `NodeList` to an array.

把一个`NodeList`转换成一个数组。

Use spread operator inside new array to convert a `NodeList` to an array.

在新数组内使用展开操作符来把`NodeList`转换成一个数组。

```js
const nodeListToArray = nodeList => [...nodeList];
```

```js
nodeListToArray(document.childNodes); // [ <!DOCTYPE html>, html ]
```