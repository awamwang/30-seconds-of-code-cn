---
title: untildify
tags: node,string,beginner
---

Converts a tilde path to an absolute path.

把斜线路径（绝对）转换成相对路径。

- Use `String.prototype.replace()` with a regular expression and `OS.homedir()` to replace the `~` in the start of the path with the home directory.

使用`String.prototype.replace()`和正则表达式，还有`OS.homedir()`来把路径开头的`~`替换为用户家目录。

```js
const untildify = str => str.replace(/^~($|\/|\\)/, `${require('os').homedir()}$1`);
```

```js
untildify('~/node'); // '/Users/aUser/node'
```