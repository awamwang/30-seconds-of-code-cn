### times

Iterates over a callback `n` times

循环一个回调函数`n`次。

Use `Function.call()` to call `fn` `n` times or until it returns `false`.
Omit the last argument, `context`, to use an `undefined` object (or the global object in non-strict mode).

使用`Function.call()`来调用`fn`函数`n`次或者直到它返回`false`。如果不传最后一个参数`context`，则使用一个`undefined`对象（在non-strict模式下使用全局对象）。

```js
const times = (n, fn, context = undefined) => {
  let i = 0;
  while (fn.call(context, i) !== false && ++i < n) {}
};
```

```js
var output = '';
times(5, i => (output += i));
console.log(output); // 01234
```
