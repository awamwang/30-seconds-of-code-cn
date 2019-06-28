### randomIntArrayInRange

Returns an array of n random integers in the specified range.

返回一个指定范围内的随机整数数组。

Use `Array.from()` to create an empty array of the specific length, `Math.random()` to generate a random number and map it to the desired range, using `Math.floor()` to make it an integer.

使用`Array.from()`来创建一个指定长度的空数组，使用`Math.random()`来生成一个随机数并把它映射到这个期望的范围，使用`Math.floor()`来把它变为整数。

```js
const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
```

```js
randomIntArrayInRange(12, 35, 10); // [ 34, 14, 27, 17, 30, 27, 20, 26, 21, 14 ]
```
