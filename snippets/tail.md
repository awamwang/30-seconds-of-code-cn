### tail

Returns all elements in an array except for the first one.

返回数组中除了第一个元素外的其他元素。

Return `Array.prototype.slice(1)` if the array's `length` is more than `1`, otherwise, return the whole array.

如果数组长度大于`1`，返回 `Array.prototype.slice(1)`；否则返回整个数组。

```js
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);
```

```js
tail([1, 2, 3]); // [2,3]
tail([1]); // [1]
```
