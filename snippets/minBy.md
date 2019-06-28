### minBy

Returns the minimum value of an array, after mapping each element to a value using the provided function.

在给数组中每个元素应用指定的函数后，返回一个其中的最小值。

Use `Array.prototype.map()` to map each element to the value returned by `fn`, `Math.min()` to get the minimum value.

使用`Array.prototype.map()`把每个元素映射到`fn`的返回值，使用`Math.min()`来获取其中最小值。

```js
const minBy = (arr, fn) => Math.min(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));
```

```js
minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 2
minBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 2
```
