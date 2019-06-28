### maxBy

Returns the maximum value of an array, after mapping each element to a value using the provided function.

在给数组中每个元素应用指定的函数后，返回一个其中的最大值。

Use `Array.prototype.map()` to map each element to the value returned by `fn`, `Math.max()` to get the maximum value.

使用`Array.prototype.map()`把每个元素映射到`fn`返回值，使用`Math.max()`来获取最大值。

```js
const maxBy = (arr, fn) => Math.max(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));
```

```js
maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 8
maxBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 8
```
