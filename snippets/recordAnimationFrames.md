### recordAnimationFrames

Invokes the provided callback on each animation frame.

对每个动画frame来执行给定的回调函数。

Use recursion. 
Provided that `running` is `true`, continue invoking `window.requestAnimationFrame()` which invokes the provided callback. 
Return an object with two methods `start` and `stop` to allow manual control of the recording. 
Omit the second argument, `autoStart`, to implicitly call `start` when the function is invoked.

使用递归。如果`running`是`true`，则继续去触发执行给定回调的`window.requestAnimationFrame()` 。返回一个有两个方法`start`和`stop`的对象来允许记录的手动控制。如果不传第二个参数`autoStart`，则在调用给定函数的时候隐式的调用`start`。

```js
const recordAnimationFrames = (callback, autoStart = true) => {
  let running = true,
    raf;
  const stop = () => {
    running = false;
    cancelAnimationFrame(raf);
  };
  const start = () => {
    running = true;
    run();
  };
  const run = () => {
    raf = requestAnimationFrame(() => {
      callback();
      if (running) run();
    });
  };
  if (autoStart) start();
  return { start, stop };
};
```

```js
const cb = () => console.log('Animation frame fired');
const recorder = recordAnimationFrames(cb); // logs 'Animation frame fired' on each animation frame
recorder.stop(); // stops logging
recorder.start(); // starts again
const recorder2 = recordAnimationFrames(cb, false); // `start` needs to be explicitly called to begin recording frames
```
