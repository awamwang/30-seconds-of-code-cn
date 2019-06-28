### functions

Returns an array of function property names from own (and optionally inherited) enumerable properties of an object.

从一个对象的自有的（可选的从继承属性）可枚举属性中返回一个函数属性名字的数组。

Use `Object.keys(obj)` to iterate over the object's own properties.
If `inherited` is `true`, use `Object.get.PrototypeOf(obj)` to also get the object's inherited properties.
Use `Array.prototype.filter()` to keep only those properties that are functions.
Omit the second argument, `inherited`, to not include inherited properties by default.

使用`Object.keys(obj)`来迭代对象的每个自有属性。如果`inherited`参数为`true`，使用`Object.getPrototypeOf(obj)`把对象的继承属性也获取到。使用`Array.prototype.filter()`来只保留那些是函数的属性。如果不传第二个参数`inherited`，则默认不包含继承属性。

```js
const functions = (obj, inherited = false) =>
  (inherited
    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
    : Object.keys(obj)
  ).filter(key => typeof obj[key] === 'function');
```

```js
function Foo() {
  this.a = () => 1;
  this.b = () => 2;
}
Foo.prototype.c = () => 3;
functions(new Foo()); // ['a', 'b']
functions(new Foo(), true); // ['a', 'b', 'c']
```
