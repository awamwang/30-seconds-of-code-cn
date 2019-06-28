### pick

Picks the key-value pairs corresponding to the given keys from an object.

根据给定的键列表从一个对象中挑选出相应的键值对。

Use `Array.prototype.reduce()` to convert the filtered/picked keys back to an object with the corresponding key-value pairs if the key exists in the object.

使用`Array.prototype.reduce()`遍历过滤/挑选出的键列表，如果键存在于原对象中，则把相应的键值对转换回新的对象中。

```js
const pick = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});
```

```js
pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }
```
