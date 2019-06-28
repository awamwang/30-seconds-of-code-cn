### throttle

Creates a throttled function that only invokes the provided function at most once per every `wait` milliseconds

创建一个每`wait`毫秒中最多执行给定的函数一次的节流函数。

Use `setTimeout()` and `clearTimeout()` to throttle the given method, `fn`.
Use `Function.prototype.apply()` to apply the `this` context to the function and provide the necessary `arguments`.
Use `Date.now()` to keep track of the last time the throttled function was invoked.
Omit the second argument, `wait`, to set the timeout at a default of 0 ms.

使用`setTimeout()`和`clearTimeout()`来节制给定的方法`fn`。使用`Function.prototype.apply()`把`this`上下文应用到这个函数并提供必要的`arguments`。使用`Date.now()`来记录被节流的函数的上一次执行时间。如果不传第二个参数`wait`，则把timeout(时间间隔)设置为默认的0ms。

```js
const throttle = (fn, wait) => {
  let inThrottle, lastFn, lastTime;
  return function() {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(function() {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
};
```

```js
window.addEventListener(
  'resize',
  throttle(function(evt) {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 250)
); // Will log the window dimensions at most every 250ms
```
