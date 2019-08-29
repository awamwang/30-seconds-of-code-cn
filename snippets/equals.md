---
title: equals
tags: object,array,type,advanced
---

Performs a deep comparison between two values to determine if they are equivalent.

在两个值之间执行深度比较来确定它们是否相等。

Check if the two values are identical, if they are both `Date` objects with the same time, using `Date.getTime()` or if they are both non-object values with an equivalent value (strict comparison).
Check if only one value is `null` or `undefined` or if their prototypes differ.
If none of the above conditions are met, use `Object.keys()` to check if both values have the same number of keys, then use `Array.prototype.every()` to check if every key in the first value exists in the second one and if they are equivalent by calling this method recursively.

检测两个值是否相等，如果它们都是拥有相同时间的`Date`对象，使用`Date.getTime()`或者它们都是拥有相同值的非对象类型值(使用严格比较)。检测是否只有一个值为`null`或者`undefined`，或者它们的属性是否不同。如果以上场景都没有出现，使用`Object.keys()`来检查是否每个值都有相同数目的键，然后用`Array.prototype.every()`来检测第一个值中的每个键是否都在第二个值中存在，递归调用这套方法来确定它们是否深度相等。

```js
const equals = (a, b) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
  if (a === null || a === undefined || b === null || b === undefined) return false;
  if (a.prototype !== b.prototype) return false;
  let keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every(k => equals(a[k], b[k]));
};
```

```js
equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }); // true
```