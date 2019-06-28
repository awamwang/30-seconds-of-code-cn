### everyNth

Returns every nth element in an array.

遍历数组，返回每第`nth`个数（隔`nth-1`取一个数，返回它们组成的数组）。

Use `Array.prototype.filter()` to create a new array that contains every nth element of a given array.

使用`Array.prototype.filter()`创建一个包含所给数组中每个第`nth`个数的数组。

```js
const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
```

```js
everyNth([1, 2, 3, 4, 5, 6], 2); // [ 2, 4, 6 ]
```
