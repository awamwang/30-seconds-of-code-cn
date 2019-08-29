---
title: createDirIfNotExists
tags: node,beginner
---

Creates a directory, if it does not exist.

如果文件夹不存在则创建一个。

Use `fs.existsSync()` to check if the directory exists, `fs.mkdirSync()` to create it.

使用`fs.existsSync()`来检查文件夹是否存在，使用`fs.mkdirSync()` 来创建它。

```js
const fs = require('fs');
const createDirIfNotExists = dir => (!fs.existsSync(dir) ? fs.mkdirSync(dir) : undefined);
```

```js
createDirIfNotExists('test'); // creates the directory 'test', if it doesn't exist
```