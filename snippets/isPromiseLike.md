### isPromiseLike

Returns `true` if an object looks like a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), `false` otherwise.

如果一个对象类似一个[`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)则返回`true`，否则返回`false`。

Check if the object is not `null`, its `typeof` matches either `object` or `function` and if it has a `.then` property, which is also a `function`.

检查这个对象是否不是`null`，它的`typeof`是否匹配`object`或者`function`，并且是否有一个`function`类型的`.then`属性。

```js
const isPromiseLike = obj =>
  obj !== null &&
  (typeof obj === 'object' || typeof obj === 'function') &&
  typeof obj.then === 'function';
```

```js
isPromiseLike({
  then: function() {
    return '';
  }
}); // true
isPromiseLike(null); // false
isPromiseLike({}); // false
```
