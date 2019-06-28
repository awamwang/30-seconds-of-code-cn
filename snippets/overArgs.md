### overArgs

Creates a function that invokes the provided function with its arguments transformed.

创建一个函数，它用给定的转换后的参数来调用给定的函数。

Use `Array.prototype.map()` to apply `transforms` to `args` in combination with the spread operator (`...`) to pass the transformed arguments to `fn`.

使用`Array.prototype.map()`和展开操作符(`...`)把`transforms`作用于`args`，然后把转换后的参数列表传给`fn`并调用。

```js
const overArgs = (fn, transforms) => (...args) => fn(...args.map((val, i) => transforms[i](val)));
```

```js
const square = n => n * n;
const double = n => n * 2;
const fn = overArgs((x, y) => [x, y], [square, double]);
fn(9, 3); // [81, 6]
```
