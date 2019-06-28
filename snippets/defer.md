### defer

Defers invoking a function until the current call stack has cleared.

延迟直到当前的调用栈清空后才执行函数（原理涉及到JS任务队列机制）。

Use `setTimeout()` with a timeout of 1ms to add a new event to the browser event queue and allow the rendering engine to complete its work. Use the spread (`...`) operator to supply the function with an arbitrary number of arguments.

使用一个1ms的timeout的`setTimeout()`来向浏览器事件队列中添加一个新的事件，然后让渲染引擎继续它的工作。使用展开操作符(`...`)来给函数提供相应参数数目的参数列表。

```js
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);
```

```js
// Example A:
defer(console.log, 'a'), console.log('b'); // logs 'b' then 'a'

// Example B:
document.querySelector('#someElement').innerHTML = 'Hello';
longRunningFunction(); // Browser will not update the HTML until this has finished
defer(longRunningFunction); // Browser will update the HTML then run the function
```
