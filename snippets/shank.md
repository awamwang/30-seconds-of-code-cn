---
title: shank
tags: array,intermediate
---

Has the same functionality as [`Array.prototype.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), but returning a new array instead of mutating the original array.

和[`Array.prototype.splice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)有相同的作用，但返回一个新数组，不改变原始数组。

- Use `Array.prototype.slice()` and `Array.prototype.concat()` to get a new array with the new contents after removing existing elements and/or adding new elements.
- Omit the second argument, `index`, to start at `0`.
- Omit the third argument, `delCount`, to remove `0` elements.
- Omit the fourth argument, `elements`, in order to not add any new elements.

使用`Array.prototype.slice()`和`Array.prototype.concat()`来获取一个删除现有元素/或添加新元素后的新数组。如果不传第二个参数`index`，默认值为`0`；如果不传第三个参数`delCount`，默认值是`0`（不删除元素）；不传第四个参数`elements`，则不添加任何新元素。

```js
const shank = (arr, index = 0, delCount = 0, ...elements) =>
  arr
    .slice(0, index)
    .concat(elements)
    .concat(arr.slice(index + delCount));
```

```js
const names = ['alpha', 'bravo', 'charlie'];
const namesAndDelta = shank(names, 1, 0, 'delta'); // [ 'alpha', 'delta', 'bravo', 'charlie' ]
const namesNoBravo = shank(names, 1, 1); // [ 'alpha', 'charlie' ]
console.log(names); // ['alpha', 'bravo', 'charlie']
```
