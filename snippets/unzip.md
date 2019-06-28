### unzip

Creates an array of arrays, ungrouping the elements in an array produced by [zip](#zip).

返回一个数组，把[zip](#zip)产生的数组元素的分组拆解掉。

Use `Math.max.apply()` to get the longest subarray in the array, `Array.prototype.map()` to make each element an array.
Use `Array.prototype.reduce()` and `Array.prototype.forEach()` to map grouped values to individual arrays.

使用`Math.max.apply()`获取数组中最长的子数组，使用`Array.prototype.map()`来把每个元素转为一个数组。使用`Array.prototype.reduce()` 和 `Array.prototype.forEach()`来把映射出来的分组的值列表分解到单独的数组列表中。

```js
const unzip = arr =>
  arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({
      length: Math.max(...arr.map(x => x.length))
    }).map(x => [])
  );
```

```js
unzip([['a', 1, true], ['b', 2, false]]); // [['a', 'b'], [1, 2], [true, false]]
unzip([['a', 1, true], ['b', 2]]); // [['a', 'b'], [1, 2], [true]]
```
