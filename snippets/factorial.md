### factorial

Calculates the factorial of a number.

计算一个数的阶乘。

Use recursion.
If `n` is less than or equal to `1`, return `1`.
Otherwise, return the product of `n` and the factorial of `n - 1`.
Throws an exception if `n` is a negative number.

使用递归。如果`n`小于或等于`1`，则返回`1`。否则返回`n`和`n-1`的阶乘的乘积。如果`n`是一个负数则抛出一个异常。

```js
const factorial = n =>
  n < 0
    ? (() => {
      throw new TypeError('Negative numbers are not allowed!');
    })()
    : n <= 1
      ? 1
      : n * factorial(n - 1);
```

```js
factorial(6); // 720
```
