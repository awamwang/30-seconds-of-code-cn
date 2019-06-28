### randomIntegerInRange

Returns a random integer in the specified range.

返回指定范围内的一个随机整数。

Use `Math.random()` to generate a random number and map it to the desired range, using `Math.floor()` to make it an integer.

使用`Math.random()`来生成一个随机数，然后把它映射到指定范围，使用`Math.floor()`来把它变为整数。

```js
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
```

```js
randomIntegerInRange(0, 5); // 2
```
