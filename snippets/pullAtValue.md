---
title: pullAtValue
tags: array,advanced
---

Mutates the original array to filter out the values specified. Returns the removed elements.

改变原始数组，过滤掉指定的值。返回被过滤掉的元素。

- Use `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.
- Use `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.
- Use `Array.prototype.push()` to keep track of pulled values

使用`Array.prototype.filter()`和`Array.prototype.includes()`去掉不需要的值。使用`Array.prototype.length = 0`，通过把数组的长度置为0重置传入的值；再使用`Array.prototype.push()`，用提取出来的值来重新建立数组。使用`Array.prototype.push()`记录提取出来的值。

```js
const pullAtValue = (arr, pullArr) => {
  let removed = [],
    pushToRemove = arr.forEach((v, i) => (pullArr.includes(v) ? removed.push(v) : v)),
    mutateTo = arr.filter((v, i) => !pullArr.includes(v));
  arr.length = 0;
  mutateTo.forEach(v => arr.push(v));
  return removed;
};
```

```js
let myArray = ['a', 'b', 'c', 'd'];
let pulled = pullAtValue(myArray, ['b', 'd']); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]
```
