### objectToPairs

Creates an array of key-value pair arrays from an object.

从一个对象创建一个键值对数组。

Use `Object.keys()` and `Array.prototype.map()` to iterate over the object's keys and produce an array with key-value pairs.

使用`Object.keys()`和`Array.prototype.map()`来遍历对象的键来生成一个键值对数组。

```js
const objectToPairs = obj => Object.keys(obj).map(k => [k, obj[k]]);
```

```js
objectToPairs({ a: 1, b: 2 }); // [ ['a', 1], ['b', 2] ]
```
