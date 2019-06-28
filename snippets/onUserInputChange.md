### onUserInputChange

Run the callback whenever the user input type changes (`mouse` or `touch`). Useful for enabling/disabling code depending on the input device. This process is dynamic and works with hybrid devices (e.g. touchscreen laptops).

只要用户输入变化（`mouse`或者`touch`）都执行回调。用于根据输入设备enabling/disabling代码。这个过程是动态的，并且兼容多种设备（例如：触摸屏的笔记本电脑）。

Use two event listeners. Assume `mouse` input initially and bind a `touchstart` event listener to the document. 
On `touchstart`, add a `mousemove` event listener to listen for two consecutive `mousemove` events firing within 20ms, using `performance.now()`.
Run the callback with the input type as an argument in either of these situations.

使用两个事件监听。假设开始是`mouse`输入，则绑定一个`touchstart`事件监听到document上。在`touchstart`事件触发时，添加一个`mousemove`事件监听来监听20ms触发的连续两个`mousemove`事件，时间间隔通过`performance.now()`来计算。在任何一种情况下都把输入类型作为回调函数的一个参数传入并调用它。

```js
const onUserInputChange = callback => {
  let type = 'mouse',
    lastTime = 0;
  const mousemoveHandler = () => {
    const now = performance.now();
    if (now - lastTime < 20)
      (type = 'mouse'), callback(type), document.removeEventListener('mousemove', mousemoveHandler);
    lastTime = now;
  };
  document.addEventListener('touchstart', () => {
    if (type === 'touch') return;
    (type = 'touch'), callback(type), document.addEventListener('mousemove', mousemoveHandler);
  });
};
```

```js
onUserInputChange(type => {
  console.log('The user is now using', type, 'as an input method.');
});
```
