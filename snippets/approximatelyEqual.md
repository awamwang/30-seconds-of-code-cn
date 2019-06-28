### approximatelyEqual

Checks if two numbers are approximately equal to each other.

检查两个数是否近似相等。

Use `Math.abs()` to compare the absolute difference of the two values to `epsilon`.
Omit the third parameter, `epsilon`, to use a default value of `0.001`.

使用`Math.abs()`计算两个值的差的绝对值，比较它和`epsilon`的大小。如果不传第三个参数`epsilon`，使用默认值`0.001`。

```js
const approximatelyEqual = (v1, v2, epsilon = 0.001) => Math.abs(v1 - v2) < epsilon; // 程序中比较近似相等的通用思路，epsilon可以被看做一个比较精度
```

```js
approximatelyEqual(Math.PI / 2.0, 1.5708); // true
```
