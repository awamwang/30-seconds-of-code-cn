---
title: JSONToFile
tags: node,json,intermediate
---

Writes a JSON object to a file.

把一个JSON对象写到文件中。

- Use `fs.writeFileSync()`, template literals and `JSON.stringify()` to write a `json` object to a `.json` file.

使用`fs.writeFileSync()`、模板字面量和`JSON.stringify()`来把这个`json`对象写到一个`.json`文件中。

```js
const fs = require('fs');
const JSONToFile = (obj, filename) =>
  fs.writeFileSync(`${filename}.json`, JSON.stringify(obj, null, 2));
```

```js
JSONToFile({ test: 'is passed' }, 'testJsonFile'); // writes the object to 'testJsonFile.json'
```
