### uniqueElementsBy

Returns all unique values of an array, based on a provided comparator function.

基于给定的比较函数判重，返回数组中所有唯一的元素。（使结果中有相同比较结果的元素唯一，只保留一个）

Use `Array.prototype.reduce()` and `Array.prototype.some()` for an array containing only the first unique occurrence of each value, based on the comparator function, `fn`.
The comparator function takes two arguments: the values of the two elements being compared.

使用`Array.prototype.reduce()`和`Array.prototype.some()`基于给定比较函数`fn`创建一个只包含每个值第一次出现的数组（每个值只包含一次）。比较函数有两个参数：分别是用来比较的两个值。

```js
const uniqueElementsBy = (arr, fn) =>
  arr.reduce((acc, v) => {
    if (!acc.some(x => fn(v, x))) acc.push(v);
    return acc;
  }, []);
```

```js
uniqueElementsBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
); // [ { id: 0, value: 'a' }, { id: 1, value: 'b' }, { id: 2, value: 'c' } ]
```
