---
title: atob
tags: node,string,beginner
---

Decodes a string of data which has been encoded using base-64 encoding.

解码一个被base-64编码的字符串（Base64解码）。

Create a `Buffer` for the given string with base-64 encoding and use `Buffer.toString('binary')` to return the decoded string.

用base-64为给定的字符串创建一个`Buffer`，使用`Buffer.toString('binary')`来返回解码后的字符串。

```js
const atob = str => Buffer.from(str, 'base64').toString('binary'); // 不支持中文；Buffer是Node中处理编码转换的以一个好工具；
```

```js
atob('Zm9vYmFy'); // 'foobar'
```
