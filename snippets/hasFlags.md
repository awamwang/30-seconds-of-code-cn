---
title: hasFlags
tags: node,intermediate
---

Check if the current process's arguments contain the specified flags.

检测当前的进程参数是否包含特定的标志（全部包含了才返回`true`）。

- Use `Array.prototype.every()` and `Array.prototype.includes()` to check if `process.argv` contains all the specified flags.
- Use a regular expression to test if the specified flags are prefixed with `-` or `--` and prefix them accordingly.

使用`Array.prototype.every()`和`Array.prototype.includes()`来检查`process.argv`是否包含全部的特定标志。使用一个正则表达式来测试特定标志的前缀是`-`还是`--`并分别给它们添加前缀。

```js
const hasFlags = (...flags) =>
  flags.every(flag => process.argv.includes(/^-{1,2}/.test(flag) ? flag : '--' + flag));
```

```js
// node myScript.js -s --test --cool=true
hasFlags('-s'); // true
hasFlags('--test', 'cool=true', '-s'); // true
hasFlags('special'); // false
```
