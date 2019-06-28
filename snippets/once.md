### once

Ensures a function is called only once.

保证一个函数只调用一次。

Utilizing a closure, use a flag, `called`, and set it to `true` once the function is called for the first time, preventing it from being called again. In order to allow the function to have its `this` context changed (such as in an event listener), the `function` keyword must be used, and the supplied function must have the context applied.
Allow the function to be supplied with an arbitrary number of arguments using the rest/spread (`...`) operator.

利用一个闭包，使用标志位`called`，并在函数第一被调用时把它设置到`true`，以防止它被再次调用。为了让函数可以有特定的`this`上下文（类似在一个事件监听器中），所以要使用函数关键字`function`，提供的函数必须应用了上下文。使用剩余展开操作符(`...`) 来让这个函数支持提供相应参数数目的参数列表。

```js
const once = fn => {
  let called = false;
  return function(...args) {
    if (called) return;
    called = true;
    return fn.apply(this, args);
  };
};
```

```js
const startApp = function(event) {
  console.log(this, event); // document.body, MouseEvent
};
document.body.addEventListener('click', once(startApp)); // only runs `startApp` once upon click
```
