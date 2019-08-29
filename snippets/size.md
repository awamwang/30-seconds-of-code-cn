---
title: size
tags: object,array,string,intermediate
---

Get size of arrays, objects or strings.

获取数组、对象或字符串的大小。

Get type of `val` (`array`, `object` or `string`). 
Use `length` property for arrays.
Use `length` or `size` value if available or number of keys for objects.
Use `size` of a [`Blob` object](https://developer.mozilla.org/en-US/docs/Web/API/Blob) created from `val` for strings.

获取`val`的类型 (`array`, `object`或者`string`)。对于数组则使用`length`，对于对象则使用`length`或`size`或者键列表的数目这三个值中可用的。对于字符串则使用从`val`创建的[`Blob` object](https://developer.mozilla.org/en-US/docs/Web/API/Blob)的`size`。

Split strings into array of characters with `split('')` and return its length.

```js
const size = val =>
  Array.isArray(val)
    ? val.length
    : val && typeof val === 'object'
    ? val.size || val.length || Object.keys(val).length
    : typeof val === 'string'
    ? new Blob([val]).size
    : 0;
```

```js
size([1, 2, 3, 4, 5]); // 5
size('size'); // 4
size({ one: 1, two: 2, three: 3 }); // 3
```