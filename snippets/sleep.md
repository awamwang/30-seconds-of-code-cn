---
title: sleep
tags: function,promise,intermediate
---

Delays the execution of an asynchronous function.

延迟一个异步函数的执行。

Delay executing part of an `async` function, by putting it to sleep, returning a `Promise`.

通过把`async`函数放到sleep后，延迟它的部分执行，返回一个`Promise`。

```js
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
```

```js
async function sleepyWork() {
  console.log("I'm going to sleep for 1 second.");
  await sleep(1000);
  console.log('I woke up after 1 second.');
}
```