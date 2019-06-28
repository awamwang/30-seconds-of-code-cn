### union

Returns every element that exists in any of the two arrays once.

返回两个数组中所有元素只出现一次所构成的数组（具有集合不重复的特性）。

Create a `Set` with all values of `a` and `b` and convert to an array.

用所有的`a` 和 `b`内的元素创建一个`Set`并把它转为数组。

```js
const union = (a, b) => Array.from(new Set([...a, ...b]));
```

```js
union([1, 2, 3], [4, 3, 2]); // [1,2,3,4]
```
