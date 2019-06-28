### deepFlatten

Deep flattens an array.

深度扁平化一个数组。（把多维的数组元素放到一个一维数组中）

Use recursion.
Use `Array.prototype.concat()` with an empty array (`[]`) and the spread operator (`...`) to flatten an array.
Recursively flatten each element that is an array.

使用递归。使用一个空数组(`[]`)的`Array.prototype.concat()`和展开操作符(`...`)来扁平化数组。递归每个数组类型的元素。

```js
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
```

```js
deepFlatten([1, [2], [[3], 4], 5]); // [1,2,3,4,5]
```
