### pullAtIndex

Mutates the original array to filter out the values at the specified indexes.

从一个原始数组中过滤掉给定的序号的元素（直接改变原始数组）。

Use `Array.prototype.filter()` and `Array.prototype.includes()` to pull out the values that are not needed.
Use `Array.prototype.length = 0` to mutate the passed in an array by resetting it's length to zero and `Array.prototype.push()` to re-populate it with only the pulled values.
Use `Array.prototype.push()` to keep track of pulled values.

使用`Array.prototype.filter()`和`Array.prototype.includes()`去掉不需要的值。使用`Array.prototype.length = 0`，通过把数组的长度置为0重置传入的值，再使用`Array.prototype.push()`，用提取出来的值来重新建立数组。使用`Array.prototype.push()`记录提取出来的值。

```js
const pullAtIndex = (arr, pullArr) => {
  let removed = [];
  let pulled = arr
    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
    .filter((v, i) => !pullArr.includes(i));
  arr.length = 0;
  pulled.forEach(v => arr.push(v));
  return removed;
};
```

```js
let myArray = ['a', 'b', 'c', 'd'];
let pulled = pullAtIndex(myArray, [1, 3]); // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]
```
