### isPrime

Checks if the provided integer is a prime number.

检查给出的整数是否为质数。

Check numbers from `2` to the square root of the given number.
Return `false` if any of them divides the given number, else return `true`, unless the number is less than `2`.

检查从`2`到给出数字的平方根范围内的数字。如果给出的数被其中任意一个整除，则返回`false`，否则返回`true`，除非这个数小于`2`。

```js
const isPrime = num => {
  const boundary = Math.floor(Math.sqrt(num));
  for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;
  return num >= 2;
};
```

```js
isPrime(11); // true
```
