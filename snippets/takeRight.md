### takeRight

Returns an array with n elements removed from the end.

返回一个由尾部`n`个元素构成的数组。

Use `Array.prototype.slice()` to create a slice of the array with `n` elements taken from the end.

使用`Array.prototype.slice()`来用尾部的`n`个元素创建一个数组的切片。

```js
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);
```

```js
takeRight([1, 2, 3], 2); // [ 2, 3 ]
takeRight([1, 2, 3]); // [3]
```
