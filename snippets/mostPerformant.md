---
title: mostPerformant
tags: function,intermediate
---

Returns the index of the function in an array of functions which executed the fastest.

返回一个函数数组中执行的最快的函数的序号。

- Use `Array.prototype.map()` to generate an array where each value is the total time taken to execute the function after `iterations` times.
- Use the difference in `performance.now()` values before and after to get the total time in milliseconds to a high degree of accuracy.
- Use `Math.min()` to find the minimum execution time, and return the index of that shortest time which corresponds to the index of the most performant function.
- Omit the second argument, `iterations`, to use a default of 10,000 iterations.
- The more iterations, the more reliable the result but the longer it will take.

- 使用`Array.prototype.map()`来生成一个元素是每个函数执行`iterations`次后的总时间的数组。使用执行前后的`performance.now()`差值来获取毫秒为单位的总时间，以获取更高精度。
- 使用`Math.min()`来找到最小执行时间，并把相应最高效的函数的序号（即最短的执行时间的序号）返回。
- 如果不传第二个参数`iterations`，则使用默认的10,000次循环。
- 循环次数越多，结果越可靠，但是花费的时间越长。

```js
const mostPerformant = (fns, iterations = 10000) => {
  const times = fns.map(fn => {
    const before = performance.now();
    for (let i = 0; i < iterations; i++) fn();
    return performance.now() - before;
  });
  return times.indexOf(Math.min(...times));
};
```

```js
mostPerformant([
  () => {
    // Loops through the entire array before returning `false`
    [1, 2, 3, 4, 5, 6, 7, 8, 9, '10'].every(el => typeof el === 'number');
  },
  () => {
    // Only needs to reach index `1` before returning false
    [1, '2', 3, 4, 5, 6, 7, 8, 9, 10].every(el => typeof el === 'number');
  }
]); // 1
```
