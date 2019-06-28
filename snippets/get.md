### get

Retrieve a set of properties indicated by the given selectors from an object.

从一个对象中使用给出的选择器获取一个指定属性列表。

Use `Array.prototype.map()` for each selector, `String.prototype.replace()` to replace square brackets with dots, `String.prototype.split('.')` to split each selector, `Array.prototype.filter()` to remove empty values and `Array.prototype.reduce()` to get the value indicated by it.

使用`Array.prototype.map()` 遍历每个selector，使用`String.prototype.replace()`来用点来替换方括号，`String.prototype.split('.')`来拆分每个选择器，使用`Array.prototype.filter()`来把空值删除，然后使用`Array.prototype.reduce()`来获取被它指定的值。

```js
const get = (from, ...selectors) =>
  [...selectors].map(s =>
    s
      .replace(/\[([^\[\]]*)\]/g, '.$1.')
      .split('.')
      .filter(t => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  );
```

```js
const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };
get(obj, 'selector.to.val', 'target[0]', 'target[2].a'); // ['val to select', 1, 'test']
```
