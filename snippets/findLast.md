### findLast

Returns the last element for which the provided function returns a truthy value.

返回最后一个被给定函数作用后返回真值的元素。

Use `Array.prototype.filter()` to remove elements for which `fn` returns falsy values, `Array.prototype.pop()` to get the last one.

使用`Array.prototype.filter()`过滤掉`fn`作用后返回假值的元素，再使用`Array.prototype.pop()`来获取其中最后一个元素。

```js
const findLast = (arr, fn) => arr.filter(fn).pop();
```

```js
findLast([1, 2, 3, 4], n => n % 2 === 1); // 3
```
