---
title: sdbm
tags: math,intermediate
---

Hashes the input string into a whole number.

把输入hash成一个完整数字。

Use `String.prototype.split('')` and `Array.prototype.reduce()` to create a hash of the input string, utilizing bit shifting.

使用`String.prototype.split('')`和`Array.prototype.reduce()`来创建一个输入字符串的hash，使用位移操作。

```js
const sdbm = str => {
  let arr = str.split('');
  return arr.reduce(
    (hashCode, currentVal) =>
      (hashCode = currentVal.charCodeAt(0) + (hashCode << 6) + (hashCode << 16) - hashCode),
    0
  );
};
```

```js
sdbm('name'); // -3521204949
```
