### sum

Returns the sum of two or more numbers/arrays.

返回两个或更多数字列表或者数组列表的和。

Use `Array.prototype.reduce()` to add each value to an accumulator, initialized with a value of `0`.

使用`Array.prototype.reduce()`来把每个值累加，初始累加值为0。

```js
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);
```

```js
sum(1, 2, 3, 4); // 10
sum(...[1, 2, 3, 4]); // 10
```
