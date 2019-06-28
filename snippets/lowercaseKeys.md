### lowercaseKeys

Creates a new object from the specified object, where all the keys are in lowercase.

从指定的对象中创建一个新的每个键都是小写形式的对象。

Use `Object.keys()` and `Array.prototype.reduce()` to create a new object from the specified object.
Convert each key in the original object to lowercase, using `String.toLowerCase()`.

使用`Object.keys()`和`Array.prototype.reduce()`来从指定的对象中创建一个新的对象。使用`String.toLowerCase()`把原始对象中每个键都转到小写形式。

```js
const lowercaseKeys = obj =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key];
    return acc;
  }, {});
```

```js
const myObj = { Name: 'Adam', sUrnAME: 'Smith' };
const myObjLower = lowercaseKeys(myObj); // {name: 'Adam', surname: 'Smith'};
```
