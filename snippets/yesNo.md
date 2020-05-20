---
title: yesNo
tags: string,regexp,intermediate
---

Returns `true` if the string is `y`/`yes` or `false` if the string is `n`/`no`.

如果一个字符串是`y`/`yes`则返回`true`，或者是`n`/`no`则返回`false`。

Use `RegExp.test()` to check if the string evaluates to `y/yes` or `n/no`.
Omit the second argument, `def` to set the default answer as `no`.

使用`RegExp.test()`来检查这个字符串是否是`y/yes`或者`n/no`。如果不传第二个参数`def`，则把默认的回答设置为`no`。

```js
const yesNo = (val, def = false) =>
  /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;
```

```js
yesNo('Y'); // true
yesNo('yes'); // true
yesNo('No'); // false
yesNo('Foo', true); // true
```
