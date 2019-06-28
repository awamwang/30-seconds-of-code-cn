### geometricProgression

Initializes an array containing the numbers in the specified range where `start` and `end` are inclusive and the ratio between two terms is `step`.
Returns an error if `step` equals `1`.

范围通过`start`和`end`指定，两个点之间的比值通过`step`指定，初始化一个数组（即生成一个等比数列）。

Use `Array.from()`, `Math.log()` and `Math.floor()` to create an array of the desired length, `Array.prototype.map()` to fill with the desired values in a range.
Omit the second argument, `start`, to use a default value of `1`.
Omit the third argument, `step`, to use a default value of `2`.

使用`Array.from()`，`Math.log()` 和 `Math.floor()`来创建一个期望长度的数组，用`Array.prototype.map()`来给它填充上期望的值。如果不传第二个参数`start`，默认值为`1`；如果不传第三个参数`step`，默认值为`2`。

```js
const geometricProgression = (end, start = 1, step = 2) =>
  Array.from({ length: Math.floor(Math.log(end / start) / Math.log(step)) + 1 }).map(
    (v, i) => start * step ** i
  );
```

```js
geometricProgression(256); // [1, 2, 4, 8, 16, 32, 64, 128, 256]
geometricProgression(256, 3); // [3, 6, 12, 24, 48, 96, 192]
geometricProgression(256, 1, 4); // [1, 4, 16, 64, 256]
```
