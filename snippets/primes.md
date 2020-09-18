---
title: primes
tags: math,array,intermediate
---

Generates primes up to a given number, using the Sieve of Eratosthenes.

使用Sieve of Eratosthenes方法生成以给定数字为上限的质数数组。

- Generate an array from `2` to the given number.
- Use `Array.prototype.filter()` to filter out the values divisible by any number from `2` to the square root of the provided number.

生成从`2`到给定数字的数组。使用`Array.prototype.filter()`来过滤掉可以被某个从`2`到它本身的平方根中任意数字整除的数字（即过滤掉非质数）。

```js
const primes = num => {
  let arr = Array.from({ length: num - 1 }).map((x, i) => i + 2),
    sqroot = Math.floor(Math.sqrt(num)),
    numsTillSqroot = Array.from({ length: sqroot - 1 }).map((x, i) => i + 2);
  numsTillSqroot.forEach(x => (arr = arr.filter(y => y % x !== 0 || y === x)));
  return arr;
};
```

```js
primes(10); // [2,3,5,7]
```
