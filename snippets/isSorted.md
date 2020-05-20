---
title: isSorted
tags: array,intermediate
---

Returns `1` if the array is sorted in ascending order, `-1` if it is sorted in descending order or `0` if it is not sorted.

如果数组正序，返回`1`；如果倒序，返回`-1`；如果没有排序，则返回`0`。

Calculate the ordering `direction` for the first two elements.
Use `Object.entries()` to loop over array objects and compare them in pairs.
Return `0` if the `direction` changes or the `direction` if the last element is reached.

通过前两个元素计算出顺序`direction`。使用`Object.entries()`来遍历数组对象，相邻元素成对比较顺序。如果`direction`变化了，整体返回`0`；否则遍历完最后一个元素后整体把`direction`返回作为结果。

```js
const isSorted = arr => {
  let direction = -(arr[0] - arr[1]);
  for (let [i, val] of arr.entries()) {
    direction = !direction ? -(arr[i - 1] - arr[i]) : direction;
    if (i === arr.length - 1) return !direction ? 0 : direction / Math.abs(direction);
    else if ((val - arr[i + 1]) * direction > 0) return 0;
  }
};
```

```js
isSorted([0, 1, 2, 2]); // 1
isSorted([4, 3, 2]); // -1
isSorted([4, 3, 5]); // 0
```
