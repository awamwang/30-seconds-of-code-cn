---
title: matches
tags: object,type,intermediate
---

Compares two objects to determine if the first one contains equivalent property values to the second one.

比较两个对象，确定第一个对象是否包含与第二个对象相同的属性值。

- Use `Object.keys(source)` to get all the keys of the second object, then `Array.prototype.every()`, `Object.hasOwnProperty()` and strict comparison to determine if all keys exist in the first object and have the same values.

使用`Object.keys(source)`来获取第二个对象的键列表，然后用`Array.prototype.every()`, `Object.hasOwnProperty()`和严格等式来确定第一个对象中是否有相同的键，并且对应的键有相同的值。

```js
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
```

```js
matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true }); // true
matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true }); // false
```
