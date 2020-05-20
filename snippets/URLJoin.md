---
title: URLJoin
tags: string,regexp,advanced
---

Joins all given URL segments together, then normalizes the resulting URL.

把所有给出的URL片段连结起来，然后把结果URL标准化。

Use `String.prototype.join('/')` to combine URL segments, then a series of `String.prototype.replace()` calls with various regexps to normalize the resulting URL (remove double slashes, add proper slashes for protocol, remove slashes before parameters, combine parameters with `'&'` and normalize first parameter delimiter).

使用`String.prototype.join('/')`来连结URL片段，然后用一系列传入正则表达式调用的`String.prototype.replace()`来标准化结果URL（删除连续的双斜线，为协议添加合适的可选符号`|`，删除参数前面的可选符号`|`，用`&`连结参数列表，然后标准化第一个参数分隔符）。

```js
const URLJoin = (...args) =>
  args
    .join('/')
    .replace(/[\/]+/g, '/')
    .replace(/^(.+):\//, '$1://')
    .replace(/^file:/, 'file:/')
    .replace(/\/(\?|&|#[^!])/g, '$1')
    .replace(/\?/g, '&')
    .replace('&', '?');
```

```js
URLJoin('http://www.google.com', 'a', '/b/cd', '?foo=123', '?bar=foo'); // 'http://www.google.com/a/b/cd?foo=123&bar=foo'
```
