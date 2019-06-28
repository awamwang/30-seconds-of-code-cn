### renameKeys

Replaces the names of multiple object keys with the values provided.

用给定的值列表替换多个对象中键的名字。

Use `Object.keys()` in combination with `Array.prototype.reduce()` and the spread operator (`...`) to get the object's keys and rename them according to `keysMap`.

使用`Object.keys()`结合`Array.prototype.reduce()`还有展开操作符(`...`)来获取对象的键列表，并根据`keysMap`重命名它们。

```js
const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );
```

```js
const obj = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 };
renameKeys({ name: 'firstName', job: 'passion' }, obj); // { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }
```
