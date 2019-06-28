### maxN

Returns the `n` maximum elements from the provided array.
If `n` is greater than or equal to the provided array's length, then return the original array (sorted in descending order).

返回给定数组中最大的`n`个数。如果`n`大于等于给定数组的长度，则返回原始数组（倒序排列）。

Use `Array.prototype.sort()` combined with the spread operator (`...`) to create a shallow clone of the array and sort it in descending order.
Use `Array.prototype.slice()` to get the specified number of elements.
Omit the second argument, `n`, to get a one-element array.

使用`Array.prototype.sort()`结合展开操作符(`...`)来创建一个给定数组的浅拷贝，然后对它倒序排列。使用`Array.prototype.slice()`来获取元素列表中指定数目的元素。如果不传第二个参数`n`，则只获取一个元素。

```js
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);
```

```js
maxN([1, 2, 3]); // [3]
maxN([1, 2, 3], 2); // [3,2]
```
