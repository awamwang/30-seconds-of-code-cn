---
title: timeTaken
tags: function,beginner
---

Measures the time taken by a function to execute.

测量函数执行所花费的时间。

- Use `console.time()` and `console.timeEnd()` to measure the difference between the start and end times to determine how long the callback took to execute.

使用`console.time()`和`console.timeEnd()`来测量开始和结束时间的差值来确定函数花费了多少时间来执行。

```js
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};
```

```js
timeTaken(() => Math.pow(2, 10)); // 1024, (logged): timeTaken: 0.02099609375ms
```
