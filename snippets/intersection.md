### intersection

Returns a list of elements that exist in both arrays.

返回两个数组公共元素组成的元素列表。

Create a `Set` from `b`, then use `Array.prototype.filter()` on `a` to only keep values contained in `b`.

从`b`创建一个`Set`，然后使用`Array.prototype.filter()`来让`a`只保留存在`b`中的元素。

```js
const intersection = (a, b) => {
  const s = new Set(b);
  return a.filter(x => s.has(x));
};
```

```js
intersection([1, 2, 3], [4, 3, 2]); // [2, 3]
```
