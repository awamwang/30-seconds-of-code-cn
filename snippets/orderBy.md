### orderBy

Returns a sorted array of objects ordered by properties and orders.

返回一个根据属性列表和顺序列表来排序的对象数组。

Uses `Array.prototype.sort()`, `Array.prototype.reduce()` on the `props` array with a default value of `0`, use array destructuring to swap the properties position depending on the order passed.
If no `orders` array is passed it sort by `'asc'` by default.

对`props`（默认值为`0`）数组使用`Array.prototype.sort()`, `Array.prototype.reduce()`，使用数组解构来根据传入的顺序交换属性的位置。如果`orders`数组不传，默认按照`'asc'`顺序排序。

```js
const orderBy = (arr, props, orders) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );
```

```js
const users = [{ name: 'fred', age: 48 }, { name: 'barney', age: 36 }, { name: 'fred', age: 40 }];
orderBy(users, ['name', 'age'], ['asc', 'desc']); // [{name: 'barney', age: 36}, {name: 'fred', age: 48}, {name: 'fred', age: 40}]
orderBy(users, ['name', 'age']); // [{name: 'barney', age: 36}, {name: 'fred', age: 40}, {name: 'fred', age: 48}]
```
