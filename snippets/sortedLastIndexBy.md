### sortedLastIndexBy

Returns the highest index at which value should be inserted into array in order to maintain its sort order, based on a provided iterator function.

基于给定的遍历函数，返回为了维持原始有序数组的顺序，把给定的新元素值添加到数组中的最大位置。

Check if the array is sorted in descending order (loosely).
Use `Array.prototype.map()` to apply the iterator function to all elements of the array.
Use `Array.prototype.reverse()` and `Array.prototype.findIndex()` to find the appropriate last index where the element should be inserted, based on the provided iterator function.

检查数组是否被倒序排列（非严格的）。使用`Array.prototype.map()`来对所有的元素应用遍历函数。使用`Array.prototype.reverse()`和`Array.prototype.findIndex()`来基于遍历函数`fn`的结果找到插入新元素的合适位置。

```js
const sortedLastIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1]);
  const val = fn(n);
  const index = arr
    .map(fn)
    .reverse()
    .findIndex(el => (isDescending ? val <= el : val >= el));
  return index === -1 ? 0 : arr.length - index;
};
```

```js
sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x); // 1
```
