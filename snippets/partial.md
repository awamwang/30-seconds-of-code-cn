### partial

Creates a function that invokes `fn` with `partials` prepended to the arguments it receives.

创建一个用部分参数`partials`结合新接收的参数来执行`fn`的函数。

Use the spread operator (`...`) to prepend `partials` to the list of arguments of `fn`.

使用展开操作符(`...`)来把`partials`放到`fn`的参数列表前部。

```js
const partial = (fn, ...partials) => (...args) => fn(...partials, ...args);
```

```js
const greet = (greeting, name) => greeting + ' ' + name + '!';
const greetHello = partial(greet, 'Hello');
greetHello('John'); // 'Hello John!'
```
