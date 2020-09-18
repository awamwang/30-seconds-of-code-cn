---
title: parseCookie
tags: browser,string,intermediate
---

Parse an HTTP Cookie header string and return an object of all cookie name-value pairs.

解析一个HTTP Cookie头字符串，并返回一个包含所有cookie键值对的对象。

- Use `String.prototype.split(';')` to separate key-value pairs from each other.
- Use `Array.prototype.map()` and `String.prototype.split('=')` to separate keys from values in each pair.
- Use `Array.prototype.reduce()` and `decodeURIComponent()` to create an object with all key-value pairs.

使用`String.prototype.split(';')`来把每个键值对分隔开。使用`Array.prototype.map()`和`String.prototype.split('=')`来从每个对中分隔键和值。使用`Array.prototype.reduce()`和`decodeURIComponent()`来创建一个包含所有键值对的对象。

```js
const parseCookie = str =>
  str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
```

```js
parseCookie('foo=bar; equation=E%3Dmc%5E2'); // { foo: 'bar', equation: 'E=mc^2' }
```
