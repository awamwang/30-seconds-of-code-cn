---
title: isBrowser
tags: browser,intermediate
---

Determines if the current runtime environment is a browser so that front-end modules can run on the server (Node) without throwing errors.

判定当前的执行环境是否是浏览器，以判断是否前端的模块可以不报错的在server上运行（Node）。

- Use `Array.prototype.includes()` on the `typeof` values of both `window` and `document` (globals usually only available in a browser environment unless they were explicitly defined), which will return `true` if one of them is `undefined`.
- `typeof` allows globals to be checked for existence without throwing a `ReferenceError`.
- If both of them are not `undefined`, then the current environment is assumed to be a browser.

对`window`和`docoment`（通常除了显示定义，只在浏览器中才可用的全局变量）的`typeof`值使用`Array.prototype.includes()`，如果它们中有一个是`undefined`则返回`true`。`typeof`运行在不报`ReferenceError`错误的情况下检查全局变量的存在性。如果它们都不是`undefined`，则当前的环境被当做一个浏览器环境。

```js
const isBrowser = () => ![typeof window, typeof document].includes('undefined');
```

```js
isBrowser(); // true (browser)
isBrowser(); // false (Node)
```
