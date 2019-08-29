---
title: chunk
tags: array,intermediate
---

Chunks an array into smaller arrays of a specified size.

把一个数组分成指定`size`的多个块。

Use `Array.from()` to create a new array, that fits the number of chunks that will be produced.
Use `Array.prototype.slice()` to map each element of the new array to a chunk the length of `size`.
If the original array can't be split evenly, the final chunk will contain the remaining elements.

使用`Array.from()`来创建一个合适分块数量的新数组（长度为分块的数目）。使用`Array.prototype.slice()`来为新数组的每个元素生成一个长度为`size`的chunk。如果源数组不能不平均分块，最后一个chunk只包含剩下的元素（长度不是`size`）。

```js
const chunk = (arr, size) =>
  Array.from(
    { length: Math.ceil(arr.length / size) },
    (v, i) => arr.slice(i * size, i * size + size) // slice会处理长度不足的情况，JS不存在越界错误
  );
```

```js
chunk([1, 2, 3, 4, 5], 2); // [[1,2],[3,4],[5]]
```