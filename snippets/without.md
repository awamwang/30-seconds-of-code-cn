### without

Filters out the elements of an array, that have one of the specified values.

过滤掉包含某个指定的值列表中的值的数组元素。

Use `Array.prototype.filter()` to create an array excluding(using `!Array.includes()`) all given values.

使用`Array.prototype.filter()`来构造一个排除(使用`!Array.includes()`)所有给出的值后的数组。

_(For a snippet that mutates the original array see [`pull`](#pull))_

_(改变原始数组的版本，参加 [`pull`](#pull))_

```js
const without = (arr, ...args) => arr.filter(v => !args.includes(v));
```

```js
without([2, 1, 2, 3], 1, 2); // [3]
```
