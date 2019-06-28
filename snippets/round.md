### round

Rounds a number to a specified amount of digits.

返回一个指定精度的数字的近似值。

Use `Math.round()` and template literals to round the number to the specified number of digits.
Omit the second argument, `decimals` to round to an integer.

使用`Math.round()`和模板字面量来把这个数字近似到指定的位数。如果不传第二个参数`decimals`，则近似到一个整数。

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
```

```js
round(1.005, 2); // 1.01
```
