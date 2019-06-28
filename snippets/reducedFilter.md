### reducedFilter

Filter an array of objects based on a condition while also filtering out unspecified keys.

根据条件过滤一个对象数组，并把元素对象的没有指定的属性过滤掉（不在`keys`中的属性）。

Use `Array.prototype.filter()` to filter the array based on the predicate `fn` so that it returns the objects for which the condition returned a truthy value.
On the filtered array, use `Array.prototype.map()` to return the new object using `Array.prototype.reduce()` to filter out the keys which were not supplied as the `keys` argument.

使用`Array.prototype.filter()`根据断言函数`fn`来过滤数组，返回条件为真值的对象。再对过滤后的数组，使用`Array.prototype.map()`来过滤掉`keys`参数中没有给出的属性。

```js
const reducedFilter = (data, keys, fn) =>
  data.filter(fn).map(el =>
    keys.reduce((acc, key) => {
      acc[key] = el[key];
      return acc;
    }, {})
  );
```

```js
const data = [
  {
    id: 1,
    name: 'john',
    age: 24
  },
  {
    id: 2,
    name: 'mike',
    age: 50
  }
];

reducedFilter(data, ['id', 'name'], item => item.age > 24); // [{ id: 2, name: 'mike'}]
```
