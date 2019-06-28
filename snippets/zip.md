### zip

Creates an array of elements, grouped based on the position in the original arrays.

创建一个基于原始数组列表中位置来分组的元素列表的数组（二维数组）。

Use `Math.max.apply()` to get the longest array in the arguments.
Creates an array with that length as return value and use `Array.from()` with a map-function to create an array of grouped elements.
If lengths of the argument-arrays vary, `undefined` is used where no value could be found.

使用`Math.max.apply()`来获取参数列表中最长的数组。用它的长度建立一个数组作为返回结果，使用`Array.from()`和一个映射函数来创建一个分组的元素列表的数组。

```js
const zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map(x => x.length));
  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
  });
};
```

```js
zip(['a', 'b'], [1, 2], [true, false]); // [['a', 1, true], ['b', 2, false]]
zip(['a'], [1, 2], [true, false]); // [['a', 1, true], [undefined, 2, false]]
```
