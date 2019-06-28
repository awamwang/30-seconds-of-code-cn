### reject

Takes a predicate and array, like `Array.prototype.filter()`, but only keeps `x` if `pred(x) === false`.

接受一个断言函数和数组，有点类似`Array.prototype.filter()`，但在`pred(x) === false`时保留`x`（就是过滤掉pred(x)为真的`x`）。

```js
const reject = (pred, array) => array.filter((...args) => !pred(...args));
```

```js
reject(x => x % 2 === 0, [1, 2, 3, 4, 5]); // [1, 3, 5]
reject(word => word.length > 4, ['Apple', 'Pear', 'Kiwi', 'Banana']); // ['Pear', 'Kiwi']
```
