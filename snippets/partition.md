### partition

Groups the elements into two arrays, depending on the provided function's truthiness for each element.

基于给定的函数对于每个元素的真值，把元素分为两组。

Use `Array.prototype.reduce()` to create an array of two arrays.
Use `Array.prototype.push()` to add elements for which `fn` returns `true` to the first array and elements for which `fn` returns `false` to the second one.

使用`Array.prototype.reduce()`来创建一个包含两个数组的新数组。使用`Array.prototype.push()`把`fn`作用后返回`true`的元素添加到第一个数组中，返回`false`的元素添加到第二个数组中。

```js
const partition = (arr, fn) =>
  arr.reduce(
    (acc, val, i, arr) => {
      acc[fn(val, i, arr) ? 0 : 1].push(val);
      return acc;
    },
    [[], []]
  );
```

```js
const users = [{ user: 'barney', age: 36, active: false }, { user: 'fred', age: 40, active: true }];
partition(users, o => o.active); // [[{ 'user': 'fred',    'age': 40, 'active': true }],[{ 'user': 'barney',  'age': 36, 'active': false }]]
```
