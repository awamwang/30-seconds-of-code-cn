### reduceWhich

Returns the minimum/maximum value of an array, after applying the provided function to set comparing rule.

使用给定的函数作为比较规则，返回一个数组的最小值/最大值。

Use `Array.prototype.reduce()` in combination with the `comparator` function to get the appropriate element in the array.
You can omit the second parameter, `comparator`, to use the default one that returns the minimum element in the array.

使用`Array.prototype.reduce()`结合`comparator`函数来获取数组中合适的元素。如果不传第二个参数`comparator`，使用一个返回数组中最小值的函数作为默认值。

```js
const reduceWhich = (arr, comparator = (a, b) => a - b) =>
  arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));
```

```js
reduceWhich([1, 3, 2]); // 1
reduceWhich([1, 3, 2], (a, b) => b - a); // 3
reduceWhich(
  [{ name: 'Tom', age: 12 }, { name: 'Jack', age: 18 }, { name: 'Lucy', age: 9 }],
  (a, b) => a.age - b.age
); // {name: "Lucy", age: 9}
```
