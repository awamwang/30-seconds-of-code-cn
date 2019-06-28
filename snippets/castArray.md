### castArray

Casts the provided value as an array if it's not one.

如果给出的值不是一个数组，则把它放到一个数组中。（统一化的返回一个数组）

Use `Array.prototype.isArray()` to determine if `val` is an array and return it as-is or encapsulated in an array accordingly.

使用`Array.prototype.isArray()`来判定`val`是否是一个数组，并根据情况返回它本身或者包裹在一个数组中后的结果。

```js
const castArray = val => (Array.isArray(val) ? val : [val]);
```

```js
castArray('foo'); // ['foo']
castArray([1]); // [1]
```
