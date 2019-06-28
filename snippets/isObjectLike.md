### isObjectLike

Checks if a value is object-like.

检查一个值是否是对象类似类型。

Check if the provided value is not `null` and its `typeof` is equal to `'object'`.

检查给出的值是否不是`null`，它的`typeof`是否等于`'object'`。

```js
const isObjectLike = val => val !== null && typeof val === 'object';
```

```js
isObjectLike({}); // true
isObjectLike([1, 2, 3]); // true
isObjectLike(x => x); // false
isObjectLike(null); // false
```
