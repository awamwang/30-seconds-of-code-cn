### intersectionBy

Returns a list of elements that exist in both arrays, after applying the provided function to each array element of both.

返回两个数组公共元素组成的元素列表，通过给定的函数`fn`来判断元素是否相同。

Create a `Set` by applying `fn` to all elements in `b`, then use `Array.prototype.filter()` on `a` to only keep elements, which produce values contained in `b` when `fn` is applied to them.

对`b`中所有元素应用函数`fn`，用结果创建一个`Set`，然后使用`Array.prototype.filter()`来让`a`只保留`b`应用`fn`的结果中的元素。

```js
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.filter(x => s.has(fn(x)));
};
```

```js
intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
```
