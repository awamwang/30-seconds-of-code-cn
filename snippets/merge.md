### merge

Creates a new object from the combination of two or more objects.

结合两个或更多个对象创建一个新的对象。

Use `Array.prototype.reduce()` combined with `Object.keys(obj)` to iterate over all objects and keys.
Use `hasOwnProperty()` and `Array.prototype.concat()` to append values for keys existing in multiple objects.

所有`Array.prototype.reduce()`结合`Object.keys(obj)`来遍历所有对象和键。使用`hasOwnProperty()`和`Array.prototype.concat()`来给在多个对象中存在的键添加值（形成值数组）。

```js
const merge = (...objs) =>
  [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
        return acc;
      }, {}),
    {}
  );
```

```js
const object = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1
};
const other = {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo'
};
merge(object, other); // { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
```
