### unflattenObject

Unflatten an object with the paths for keys.

用键的路径列表去扁平化一个对象（变为多级结构）。

Use `Object.keys(obj)` combined with `Array.prototype.reduce()` to convert flattened path node to a leaf node.
If the value of a key contains a dot delimiter (`.`), use `Array.prototype.split('.')`, string transformations and `JSON.parse()` to create an object, then `Object.assign()` to create the leaf node.
Otherwise, add the appropriate key-value pair to the accumulator object.

使用`Object.keys(obj)`结合`Array.prototype.reduce()`来把扁平的路径节点转换成一个叶子节点。如果键的值包含一个点分符合(`.`)，使用`Array.prototype.split('.')`，字符串变形和`JSON.parse()`来创建一个对象，然后用`Object.assign()`来创建一个叶子节点。否则，向累加器中添加合适的键值对。

```js
const unflattenObject = obj =>
  Object.keys(obj).reduce((acc, k) => {
    if (k.indexOf('.') !== -1) {
      const keys = k.split('.');
      Object.assign(
        acc,
        JSON.parse(
          '{' +
            keys.map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`)).join('') +
            obj[k] +
            '}'.repeat(keys.length)
        )
      );
    } else acc[k] = obj[k];
    return acc;
  }, {});
```

```js
unflattenObject({ 'a.b.c': 1, d: 1 }); // { a: { b: { c: 1 } }, d: 1 }
```
