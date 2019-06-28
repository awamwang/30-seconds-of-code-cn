### debounce

Creates a debounced function that delays invoking the provided function until at least `ms` milliseconds have elapsed since the last time it was invoked.

创建一个最少延迟`ms`毫秒执行（本次在上一次执行`ms`毫秒之后）给定函数的防抖的函数。通俗的讲：停止改变大小n毫秒后才执行函数。

Each time the debounced function is invoked, clear the current pending timeout with `clearTimeout()` and use `setTimeout()` to create a new timeout that delays invoking the function until at least `ms` milliseconds has elapsed. Use `Function.prototype.apply()` to apply the `this` context to the function and provide the necessary arguments.
Omit the second argument, `ms`, to set the timeout at a default of 0 ms.

每次防抖的函数被执行，都用`clearTimeout()`把当前挂起的timeout清除，并用`setTimeout()`创建一个新的最少延迟`ms`毫秒执行这个函数的timeout。使用`Function.prototype.apply()`来把`this`上下文环境应用到这个函数上并提供需要的参数列表。如果不传第二个参数`ms`，则timeout默认为0ms。
```js
const debounce = (fn, ms = 0) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
```

```js
window.addEventListener(
  'resize',
  debounce(() => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250)
); // Will log the window dimensions at most every 250ms
```
