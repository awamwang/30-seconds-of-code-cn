### bindKey

Creates a function that invokes the method at a given key of an object, optionally adding any additional supplied parameters to the beginning of the arguments.

创建一个执行给定对象的指定key中的方法的函数（调用对象的某个方法属性），可选的在参数列表的头部添加任何额外提供的参数。

Return a `function` that uses `Function.prototype.apply()` to bind `context[fn]` to `context`.
Use the spread operator (`...`) to prepend any additional supplied parameters to the arguments.

返回一个函数`function`，它使用`Function.prototype.apply()`来把`context[fn]`的上下文绑定为`context`。使用展开操作符(`...`)来把给定的额外参数添加到参数列表的头部。

```js
const bindKey = (context, fn, ...boundArgs) => (...args) =>
  context[fn].apply(context, [...boundArgs, ...args]);
```

```js
const freddy = {
  user: 'fred',
  greet: function(greeting, punctuation) {
    return greeting + ' ' + this.user + punctuation;
  }
};
const freddyBound = bindKey(freddy, 'greet');
console.log(freddyBound('hi', '!')); // 'hi fred!'
```
