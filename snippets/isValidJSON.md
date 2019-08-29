---
title: isValidJSON
tags: type,json,intermediate
---

Checks if the provided string is a valid JSON.

检查给出的字符串是否是一个合法的JSON。

Use `JSON.parse()` and a `try... catch` block to check if the provided string is a valid JSON.

使用`JSON.parse()`和一个`try... catch`代码块来检查给出的字符串是否是一个合法的JSON。

```js
const isValidJSON = str => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};
```

```js
isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true
```