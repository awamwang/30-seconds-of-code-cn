### is

Checks if the provided value is of the specified type.

检查提供的值是不是特定的类型。

Ensure the value is not `undefined` or `null` using `Array.prototype.includes()`, and compare the `constructor` property on the value with `type` to check if the provided value is of the specified `type`.

使用`Array.prototype.includes()`确保这个值不是`undefined`或者`null`，然后比较值的`constructor`属性和`type`来检查提供的值是不是特定的类型。

```js
const is = (type, val) => ![, null].includes(val) && val.constructor === type;
```

```js
is(Array, [1]); // true
is(ArrayBuffer, new ArrayBuffer()); // true
is(Map, new Map()); // true
is(RegExp, /./g); // true
is(Set, new Set()); // true
is(WeakMap, new WeakMap()); // true
is(WeakSet, new WeakSet()); // true
is(String, ''); // true
is(String, new String('')); // true
is(Number, 1); // true
is(Number, new Number(1)); // true
is(Boolean, true); // true
is(Boolean, new Boolean(true)); // true
```
