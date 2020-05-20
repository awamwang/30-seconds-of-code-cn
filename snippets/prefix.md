---
title: prefix
tags: browser,intermediate
---

Returns the prefixed version (if necessary) of a CSS property that the browser supports.

返回一个浏览器支持的CSS属性的前缀版本（如果需要的话）。

Use `Array.prototype.findIndex()` on an array of vendor prefix strings to test if `document.body` has one of them defined in its `CSSStyleDeclaration` object, otherwise return `null`.
Use `String.prototype.charAt()` and `String.prototype.toUpperCase()` to capitalize the property, which will be appended to the vendor prefix string.

对一个浏览器引擎前缀字符串数组使用`Array.prototype.findIndex()`来测试`document.body`的`CSSStyleDeclaration`对象中是否有其中之一，否则返回`null`。使用`String.prototype.charAt()`和`String.prototype.toUpperCase()`来把要添加的浏览器引擎前缀字符串后面的属性转换为大写开头。

```js
const prefix = prop => {
  const capitalizedProp = prop.charAt(0).toUpperCase() + prop.slice(1);
  const prefixes = ['', 'webkit', 'moz', 'ms', 'o'];
  const i = prefixes.findIndex(
    prefix => typeof document.body.style[prefix ? prefix + capitalizedProp : prop] !== 'undefined'
  );
  return i !== -1 ? (i === 0 ? prop : prefixes[i] + capitalizedProp) : null;
};
```

```js
prefix('appearance'); // 'appearance' on a supported browser, otherwise 'webkitAppearance', 'mozAppearance', 'msAppearance' or 'oAppearance'
```
