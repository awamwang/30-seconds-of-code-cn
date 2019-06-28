### powerset

Returns the powerset of a given array of numbers.

返回给定的数字数组的幂集合。

Use `Array.prototype.reduce()` combined with `Array.prototype.map()` to iterate over elements and combine into an array containing all combinations.

使用`Array.prototype.reduce()`结合`Array.prototype.map()`来遍历所有元素并将结果结合到一个包含所有组合情况的数组中。

```js
const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
```

```js
powerset([1, 2]); // [[], [1], [2], [2, 1]]
```
