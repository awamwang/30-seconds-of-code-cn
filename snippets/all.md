### all

Returns `true` if the provided predicate function returns `true` for all elements in a collection, `false` otherwise.

如果给定集合中的所有元素都使给定的断言函数返回`true`，则整体返回`true`；否则返回`false`。

Use `Array.prototype.every()` to test if all elements in the collection return `true` based on `fn`.
Omit the second argument, `fn`, to use `Boolean` as a default.

使用`Array.prototype.every()` 把集合中所有元素都传给`fn`来验证是否都返回`true` 。不传第二个参数`fn`，则使用默认的`Boolean`（布尔型的构造函数）作为默认值。

```js
const all = (arr, fn = Boolean) => arr.every(fn);
```

```js
all([4, 2, 3], x => x > 1); // true
all([1, 2, 3]); // true
```
