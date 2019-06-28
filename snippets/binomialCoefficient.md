### binomialCoefficient

Evaluates the binomial coefficient of two integers `n` and `k`.

计算两个整数`n`和`k`产生的二项式系数。

Use `Number.isNaN()` to check if any of the two values is `NaN`.
Check if `k` is less than `0`, greater than or equal to `n`, equal to `1` or `n - 1` and return the appropriate result.
Check if `n - k` is less than `k` and switch their values accordingly.
Loop from `2` through `k` and calculate the binomial coefficient.
Use `Math.round()` to account for rounding errors in the calculation.

使用`Number.isNaN()`检查两个值是否是`NaN`。检查`k`是否小于`0`、大于或等于`n`、等于`1`或者`n-1`并返回这些情况下合适的结果。检查`n - k`是否小于`k`并交换它们的值。循环`2`到`k`并计算相应的二项式系数。使用`Math.round()`来处理计算中的近似错误（由于有除法计算，可能产生浮点数结果）。

```js
const binomialCoefficient = (n, k) => {
  if (Number.isNaN(n) || Number.isNaN(k)) return NaN;
  if (k < 0 || k > n) return 0;
  if (k === 0 || k === n) return 1;
  if (k === 1 || k === n - 1) return n;
  if (n - k < k) k = n - k;
  let res = n;
  for (let j = 2; j <= k; j++) res *= (n - j + 1) / j; // 这一步也是计算组合数的代码片段
  return Math.round(res);
};
```

```js
binomialCoefficient(8, 2); // 28
```
