### differenceBy

Returns the difference between two arrays, after applying the provided function to each array element of both.

在对数组中元素都应用一个给定的函数的基础上，返回两个数组中不同的元素。

Create a `Set` by applying `fn` to each element in `b`, then use `Array.prototype.map()` to apply `fn` to each element in `a`, then `Array.prototype.filter()`

用`fn`作用域数组`b`中每个元素的结果创建一个`Set`，然后使用`Array.prototype.map()`对数组`a`中的每个元素应用`fn`，然后使用`Array.prototype.filter()`（过滤出不在之前set中的元素）。

```js
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.map(fn).filter(el => !s.has(el));
};
```

```js
differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [1]
differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x); // [2]
```
