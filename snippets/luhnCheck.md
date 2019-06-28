### luhnCheck

Implementation of the [Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm) used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers, National Provider Identifier numbers etc.

[Luhn Algorithm](https://en.wikipedia.org/wiki/Luhn_algorithm)的实现，用来验证一个id的合法性，例如信用卡号，IMEI号，国家身份证号。

Use `String.prototype.split('')`, `Array.prototype.reverse()` and `Array.prototype.map()` in combination with `parseInt()` to obtain an array of digits.
Use `Array.prototype.splice(0,1)` to obtain the last digit.
Use `Array.prototype.reduce()` to implement the Luhn Algorithm.
Return `true` if `sum` is divisible by `10`, `false` otherwise.

使用`String.prototype.split('')`, `Array.prototype.reverse()`和`Array.prototype.map()`结合`parseInt()`来获取一个十进制数的数组。使用`Array.prototype.splice(0,1)`来获取十进制数的最后一位。使用`Array.prototype.reduce()`来实行Luhn算法。如果`sum`可以被`10`整除则返回`true`，否则返回`false`。

```js
const luhnCheck = num => {
  let arr = (num + '')
    .split('')
    .reverse()
    .map(x => parseInt(x));
  let lastDigit = arr.splice(0, 1)[0];
  let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
  sum += lastDigit;
  return sum % 10 === 0;
};
```

```js
luhnCheck('4485275742308327'); // true
luhnCheck(6011329933655299); //  false
luhnCheck(123456789); // false
```
