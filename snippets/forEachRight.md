### forEachRight

Executes a provided function once for each array element, starting from the array's last element.

从数组中最后一个元素开始，对数组中每个元素执行给定的函数。

Use `Array.prototype.slice(0)` to clone the given array, `Array.prototype.reverse()` to reverse it and `Array.prototype.forEach()` to iterate over the reversed array.

使用`Array.prototype.slice(0)`来克隆给定的数组，使用`Array.prototype.reverse()`来翻转数组，使用`Array.prototype.forEach()`遍历翻转后的数组。

```js
const forEachRight = (arr, callback) =>
  arr
    .slice(0)
    .reverse()
    .forEach(callback);
```

```js
forEachRight([1, 2, 3, 4], val => console.log(val)); // '4', '3', '2', '1'
```
