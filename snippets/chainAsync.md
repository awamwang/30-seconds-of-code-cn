### chainAsync

Chains asynchronous functions.

链式执行异步函数。

Loop through an array of functions containing asynchronous events, calling `next` when each asynchronous event has completed.

遍历执行一个包含异步事件的函数数组，当每个异步事件被完成时调用`next`。（创建了一个使用next来触发下一步的链式执行机制）

```js
const chainAsync = fns => {
  let curr = 0;
  const last = fns[fns.length - 1];
  const next = () => {
    const fn = fns[curr++];
    fn === last ? fn() : fn(next);
  };
  next();
};
```

```js
chainAsync([
  next => {
    console.log('0 seconds');
    setTimeout(next, 1000);
  },
  next => {
    console.log('1 second');
    setTimeout(next, 1000);
  },
  () => {
    console.log('2 second');
  }
]);
```
