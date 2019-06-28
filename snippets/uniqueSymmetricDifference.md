### uniqueSymmetricDifference

Returns the unique symmetric difference between two arrays, not containing duplicate values from either array.

返回两个数组中所有不相同的元素，不包含每个数组中的重复元素。

Use `Array.prototype.filter()` and `Array.prototype.includes()` on each array to remove values contained in the other, then create a `Set` from the results, removing duplicate values.

对每个数组使用`Array.prototype.filter()`和`Array.prototype.includes()`来删除存在在另一个数组中的元素，然后从剩下的结果中返回一个`Set`来去重。

```js
const uniqueSymmetricDifference = (a, b) => [
  ...new Set([...a.filter(v => !b.includes(v)), ...b.filter(v => !a.includes(v))])
];
```

```js
uniqueSymmetricDifference([1, 2, 3], [1, 2, 4]); // [3, 4]
uniqueSymmetricDifference([1, 2, 2], [1, 3, 1]); // [2, 3]
```
