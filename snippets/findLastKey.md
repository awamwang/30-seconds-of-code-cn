### findLastKey

Returns the last key that satisfies the provided testing function.
Otherwise `undefined` is returned.

返回满足给定测试函数的最后一个键。否则返回`undefined`。

Use `Object.keys(obj)` to get all the properties of the object, `Array.prototype.reverse()` to reverse their order and `Array.prototype.find()` to test the provided function for each key-value pair.
The callback receives three arguments - the value, the key and the object.

使用`Object.keys(obj)`来获取对象所有属性，使用`Array.prototype.reverse()`来倒转它们的顺序，使用`Array.prototype.find()`来对每个键值对测试指定的函数。回调函数接受三个参数——值，键，和对象。

```js
const findLastKey = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .find(key => fn(obj[key], key, obj));
```

```js
findLastKey(
  {
    barney: { age: 36, active: true },
    fred: { age: 40, active: false },
    pebbles: { age: 1, active: true }
  },
  o => o['active']
); // 'pebbles'
```
