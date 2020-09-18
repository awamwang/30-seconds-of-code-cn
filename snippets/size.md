---
title: size
tags: object,array,string,intermediate
---

Gets the size of an array, object or string.

获取数组、对象或字符串的大小。

- Get type of `val` (`array`, `object` or `string`).
- Use `length` property for arrays.
- Use `length` or `size` value if available or number of keys for objects.
- Use `size` of a [`Blob` object](https://developer.mozilla.org/en-US/docs/Web/API/Blob) created from `val` for strings.
- Split strings into array of characters with `split('')` and return its length.

- 获取`val`的类型 (`array`, `object`或者`string`)。
- 对于数组则使用`length`。
- 对于对象则使用`length`或`size`或者键列表的数目这三个值中可用的。
- 对于字符串则使用从`val`创建的[`Blob` object](https://developer.mozilla.org/en-US/docs/Web/API/Blob)的`size`。
- 用`split('')`来把字符串分割成一个字符数组，并返回它的长度。(这里使用[...str].length会更好，能避免组合字符的长度问题，得到我们更想要的结果)

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
