---
title: getURLParameters
tags: utility,browser,string,url,intermediate
---

Returns an object containing the parameters of the current URL.

返回一个包含当前URL的参数的对象。

Use `String.match()` with an appropriate regular expression to get all key-value pairs, `Array.prototype.reduce()` to map and combine them into a single object.
Pass `location.search` as the argument to apply to the current `url`.

使用`String.match()`和一个合适的正则表达式来获取所有键值对，使用`Array.prototype.reduce()`来映射并把它们组合成一个单一对象。把`location.search`作为参数传入以应用到当前的`url`参数。

```js
const getURLParameters = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  );
```

```js
getURLParameters('http://url.com/page?name=Adam&surname=Smith'); // {name: 'Adam', surname: 'Smith'}
getURLParameters('google.com'); // {}
```