---
title: serializeCookie
tags: browser,string,intermediate
---

Serialize a cookie name-value pair into a Set-Cookie header string.

把一个cookie键值对序列化为一个Set-Cookie HTTP头字符串。

Use template literals and `encodeURIComponent()` to create the appropriate string.

使用模板字面量和`encodeURIComponent()`来创建一个合适的字符串。

```js
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;
```

```js
serializeCookie('foo', 'bar'); // 'foo=bar'
```
