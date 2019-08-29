---
title: fromCamelCase
tags: string,intermediate
---

Converts a string from camelcase.

从驼峰写法的字符串转换出一个字符串。

Use `String.prototype.replace()` to remove underscores, hyphens, and spaces and convert words to camelcase.
Omit the second argument to use a default `separator` of `_`.

使用`String.prototype.replace()`来去掉下划线、连字符，还有空白字符，并把每个词转换为驼峰的。如果不传第二个参数，默认`separator`为`_`。（这段说明应该说的是驼峰化，反了）

```js
const fromCamelCase = (str, separator = '_') =>
  str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();
```

```js
fromCamelCase('someDatabaseFieldName', ' '); // 'some database field name'
fromCamelCase('someLabelThatNeedsToBeCamelized', '-'); // 'some-label-that-needs-to-be-camelized'
fromCamelCase('someJavascriptProperty', '_'); // 'some_javascript_property'
```